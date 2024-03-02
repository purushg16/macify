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

  rooms: undefined,
  addPropertyRooms: (rooms) => set(() => ({ rooms: rooms })),

  editRoom: (room) =>
    set((store) => ({
      rooms: store.rooms?.map((r) => (r.roomId === room.roomId ? room : r)),
    })),

  serialize: (startingNumber) =>
    set((store) => ({
      rooms: store.rooms?.map((room, index) => ({
        ...room,
        roomName: `Room ${startingNumber + index}`,
      })),
    })),

  capacityApplyAll: (capacity) =>
    set((store) => ({
      rooms: store.rooms?.map((room) => ({
        ...room,
        guestCapacity: capacity,
      })),
    })),
}));

export default useAddPropertyRoomStore;
