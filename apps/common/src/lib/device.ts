import type { Room } from "./room";

export enum DeviceType {
    Speaker = "SPEAKER",
    Microphone = "MICROPHONE",
    Screen = "SCREEN",
    Camera = "CAMERA",
    Source = "SOURCE",
    Controller = "CONTROLLER",
}

export type Device = {
    readonly room: Room;
    readonly type: DeviceType;
    readonly associatedDevices: Device[];
    readonly ipAddress: string;
    readonly id: string;
    readonly controller?: Device;
};
