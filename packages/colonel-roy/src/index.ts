import "@smarthome/common";
import { createServer } from "http";
import { Server } from "socket.io";

const PORT = process.env.COLONEL_ROY_PORT
    ? Number(process.env.COLONEL_ROY_PORT)
    : 3000;

const server = createServer();
const io = new Server(server);

io.on("connection", (socket) => {
    console.log(
        "Snake! This is the Colonel.... A new connection has been established",
    );

    socket.on("disconnect", () => {
        console.log(
            "Snake! This is the Colonel.... A connection has been terminated",
        );
    });
});

server.listen(PORT, undefined, undefined, () => {
    console.log("Snake! This is the Colonel.... I'm listening on port " + PORT);
});
