import { type ColonelRoyClient } from "@smarthome/common/dist/lib/monitor.js";

export const registerClient = (clientInfo: ColonelRoyClient) => {
    console.log(
        `Snake! This is the Colonel.... ${clientInfo.name} has registered successfully!`,
    );
};
