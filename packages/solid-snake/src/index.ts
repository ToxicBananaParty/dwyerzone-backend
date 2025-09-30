import rooms from "./rooms/index.js";

function stringifyMaxDepth(obj: any, depth: number, spaces: number): string {
    // recursion limited by depth arg
    if (!obj || typeof obj !== "object") return JSON.stringify(obj);

    let curDepthResult = '"<?>"'; // too deep
    if (depth > 0) {
        curDepthResult = Object.keys(obj)
            .map((key) => {
                let val = stringifyMaxDepth(obj[key], depth - 1, spaces);
                if (val === undefined) val = "null";
                return `"${key}": ${val}`;
            })
            .join(", ");
        curDepthResult = `{${curDepthResult}}`;
    }

    return JSON.stringify(JSON.parse(curDepthResult), null, spaces);
}

console.log(stringifyMaxDepth(rooms, 4, 2));
