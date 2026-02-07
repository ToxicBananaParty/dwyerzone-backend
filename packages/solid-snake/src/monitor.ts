import { io } from "socket.io-client";
import { MONITOR_ADDR } from "@smarthome/common";
import { type ColonelRoyClient } from "@smarthome/common";

export const startMonitor = () => {
    const clientInfo: ColonelRoyClient = {
        name: "Solid Snake",
    };
    const socket = io(MONITOR_ADDR);

    socket.on("connect", () => {
        console.log("Connected to Colonel Roy....");
        socket.emit("register", clientInfo);
    });

    socket.on("disconnect", () => {
        console.log("Disconnected from Colonel Roy....");
    });
};

export default startMonitor;
