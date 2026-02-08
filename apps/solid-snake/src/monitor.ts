import { io } from "socket.io-client";
import { MONITOR_ADDR } from "@smarthome/common";
import {
    type ColonelRoyClient,
    type RegisterCallback,
} from "@smarthome/common";

export const startMonitor = () => {
    const clientInfo: ColonelRoyClient = {
        name: "Solid Snake",
    };
    const socket = io(MONITOR_ADDR);

    socket.on("connect", () => {
        console.log("Connected to Colonel Roy....");
        const onRegister: RegisterCallback = (registeredClient) => {
            console.log(
                `Registered with Colonel Roy as ${registeredClient.name}.`,
            );
        };
        socket.emit("register", clientInfo, onRegister);
    });

    socket.on("disconnect", () => {
        console.log("Disconnected from Colonel Roy....");
    });
};

export default startMonitor;
