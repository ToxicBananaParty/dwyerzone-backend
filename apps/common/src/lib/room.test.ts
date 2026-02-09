import { RoomType } from "./room";

describe("RoomType", () => {
    it("exposes the expected enum values", () => {
        expect(RoomType.LivingRoom).toBe("LIVING_ROOM");
        expect(RoomType.Kitchen).toBe("KITCHEN");
    });
});
