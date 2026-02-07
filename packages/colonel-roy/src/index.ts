import { COLONEL_ROY_PORT } from "@smarthome/common";
import { type ColonelRoyClient } from "@smarthome/common";
import { createServer } from "http";
import { Server } from "socket.io";
import { registerClient } from "./client.js";

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

    socket.on("register", (clientInfo: ColonelRoyClient, callback) => {
        registerClient(clientInfo);
        console.log(
            `Snake! This is the Colonel.... ${clientInfo.name} has registered successfully!`,
        );

        if (callback && typeof callback === "function") {
            callback();
        }
    });
});

server.listen(COLONEL_ROY_PORT, undefined, undefined, () => {
    console.log(
        "Snake! This is the Colonel.... I'm listening on port " +
            COLONEL_ROY_PORT,
    );
});
