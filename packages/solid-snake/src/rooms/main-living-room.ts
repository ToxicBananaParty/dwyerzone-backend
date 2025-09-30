import RoomType, { type Room } from "../lib/room.js";
import DeviceType, { type Device } from "../lib/device.js";

const MAIN_LIVING_ROOM: Room = {
    type: RoomType.LivingRoom,
    devices: [],
    bordering: [],
    id: "MAIN_LIVING_ROOM",
};

const SOUNDBAR: Device = {
    room: MAIN_LIVING_ROOM,
    type: DeviceType.Speaker,
    associatedDevices: [],
    ipAddress: "127.0.0.1",
    id: "MAIN_LIVING_ROOM_SOUNDBAR",
};

const TV: Device = {
    room: MAIN_LIVING_ROOM,
    type: DeviceType.Screen,
    associatedDevices: [],
    ipAddress: "127.0.0.2",
    id: "MAIN_LIVING_ROOM_TV",
};

TV.associatedDevices.push(SOUNDBAR);
SOUNDBAR.associatedDevices.push(TV);

MAIN_LIVING_ROOM.devices.push(TV, SOUNDBAR);

export default MAIN_LIVING_ROOM;
