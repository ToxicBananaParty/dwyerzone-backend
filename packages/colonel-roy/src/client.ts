import { type ColonelRoyClient } from "@smarthome/common";

export type RegisteredClient = ColonelRoyClient & {
    id: string;
    connectedAt: string;
};

const clients = new Map<string, RegisteredClient>();

export const registerClient = (
    clientInfo: ColonelRoyClient,
    socketId: string,
) => {
    const registeredClient: RegisteredClient = {
        ...clientInfo,
        id: socketId,
        connectedAt: new Date().toISOString(),
    };
    clients.set(socketId, registeredClient);
    return registeredClient;
};

export const unregisterClient = (socketId: string) => {
    clients.delete(socketId);
};

export const listClients = () => Array.from(clients.values());
