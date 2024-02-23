import { create } from "zustand";

export type PropertyType = "Hostel" | "Flat" | "Villa" | undefined;

interface AddPropertyRoomStore {
  numberOfRooms: number | undefined;
  propertyRoomsArray: string[] | undefined;
}

interface AddPropertyRoomStoreActions {
  setNumberOfRooms: (numberOfRooms: number | undefined) => void;
  addPropertyRooms: (rooms: string[] | undefined) => void;
}

const useAddPropertyRoomStore = create<
  AddPropertyRoomStore & AddPropertyRoomStoreActions
>((set) => ({
  numberOfRooms: undefined,
  setNumberOfRooms: (numberOfRooms) => set({ numberOfRooms }),

  propertyRoomsArray: undefined,
  addPropertyRooms: (rooms) => set(() => ({ propertyRoomsArray: rooms })),
}));

export default useAddPropertyRoomStore;
