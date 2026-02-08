import type { Device } from "./device";

export enum RoomType {
    LivingRoom = "LIVING_ROOM",
    Kitchen = "KITCHEN",
    MasterBedroom = "MASTER_BEDROOM",
    MasterBathroom = "MASTER_BATHROOM",
    GuestBedroom = "GUEST_BEDROOM",
    GuestBathroom = "GUEST_BATHROOM",
    Office = "OFFICE",
    Garage = "GARAGE",
    Hallway = "HALLWAY",
}

export type Room = {
    readonly type: RoomType;
    readonly devices: Device[];
    readonly bordering: Room[];
    readonly id: string;
};
