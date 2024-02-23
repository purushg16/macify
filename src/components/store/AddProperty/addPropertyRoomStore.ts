import { create } from "zustand";
import Room from "../../entities/room";

export type PropertyType = "Hostel" | "Flat" | "Villa" | undefined;

interface AddPropertyRoomStore {
  numberOfRooms: number | undefined;
  propertyRooms: Room[] | undefined;
}

interface AddPropertyRoomStoreActions {
  setNumberOfRooms: (numberOfRooms: number | undefined) => void;
  addPropertyRooms: (rooms: Room[] | undefined) => void;
}

const useAddPropertyRoomStore = create<
  AddPropertyRoomStore & AddPropertyRoomStoreActions
>((set) => ({
  numberOfRooms: undefined,
  setNumberOfRooms: (numberOfRooms) => set({ numberOfRooms }),

  propertyRooms: undefined,
  addPropertyRooms: (rooms) => set(() => ({ propertyRooms: rooms })),
}));

export default useAddPropertyRoomStore;
