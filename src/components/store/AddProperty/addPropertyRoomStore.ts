import { create } from "zustand";
import Room from "../../entities/room";
import { AddPropertyRoomInterface } from "../../entities/addPropertyRoomInterface.ts";

interface AddPropertyRoomStoreActions {
  setNumberOfRooms: (numberOfRooms: number | undefined) => void;
  addPropertyRooms: (rooms: Room[] | undefined) => void;
  editRoom: (room: Room) => void;

  serialize: (startingNumber: number) => void;
  capacityApplyAll: (capacity: number) => void;
}

const useAddPropertyRoomStore = create<
  AddPropertyRoomInterface & AddPropertyRoomStoreActions
>((set) => ({
  numberOfRooms: undefined,
  setNumberOfRooms: (numberOfRooms) => set({ numberOfRooms }),

  propertyRooms: undefined,
  addPropertyRooms: (rooms) => set(() => ({ propertyRooms: rooms })),

  editRoom: (room) =>
    set((store) => ({
      propertyRooms: store.propertyRooms?.map((r) => {
        return r.roomId === room.roomId
          ? { ...r, roomName: room.roomName, guestCapacity: room.guestCapacity }
          : r;
      }),
    })),

  serialize: (startingNumber) =>
    set((store) => ({
      propertyRooms: store.propertyRooms?.map((r, index) => ({
        ...r,
        roomName: `room${startingNumber + index}`,
      })),
    })),

  capacityApplyAll: (capacity) =>
    set((store) => ({
      propertyRooms: store.propertyRooms?.map((room) => ({
        ...room,
        capacity: capacity,
      })),
    })),
}));

export default useAddPropertyRoomStore;
