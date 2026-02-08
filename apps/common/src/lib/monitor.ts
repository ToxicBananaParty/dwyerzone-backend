export type ColonelRoyClient = {
    name: string;
};

export type RegisteredClient = ColonelRoyClient & {
    id: string;
    connectedAt: string;
};

export type RegisterCallback = (client: RegisteredClient) => void;
