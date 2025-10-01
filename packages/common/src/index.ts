import dotenv from "dotenv";
dotenv.config();

export const COLONEL_ROY_PORT = process.env.COLONEL_ROY_PORT
    ? Number(process.env.COLONEL_ROY_PORT)
    : 3000;
export const MONITOR_ADDR = `ws://localhost:${COLONEL_ROY_PORT}`;
