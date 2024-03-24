import { create } from "zustand";
import AddRoomInterface from "../entities/AddRoomInterface";
import { v4 as uuidv4 } from "uuid";

export interface AddRoomData {
  id: string;
  roomName: string;
  guestCapacity: number;
}

interface AddRoomStore {
  rooms: AddRoomInterface[];
  addRoom: (propertyId: string, room: AddRoomData) => void;
  removeRoom: (propertyId: string, roomId: string) => void;
  editRoom: (
    propertyId: string,
    roomId: string,
    key: keyof AddRoomData,
    value: string | number
  ) => void;

  clearSinglePropertyRooms: (propertyId: string) => void;
}

const useAddRoomsStore = create<AddRoomStore>((set) => ({
  rooms: [],
  addRoom: (propertyId, newRoom) =>
    set((store) => {
      const existingPropertyIndex = store.rooms.findIndex(
        (room) => room.propertyId === propertyId
      );
      if (existingPropertyIndex !== -1) {
        return {
          rooms: store.rooms.map((room, index) =>
            index === existingPropertyIndex
              ? {
                  ...room,
                  roomsData: [...room.roomsData, { ...newRoom, id: uuidv4() }],
                }
              : room
          ),
        };
      }
      return {
        rooms: [
          ...store.rooms,
          { propertyId, roomsData: [{ ...newRoom, id: uuidv4() }] },
        ],
      };
    }),

  clearSinglePropertyRooms: (propertyId) =>
    set((store) => ({
      rooms: store.rooms.filter((room) => room.propertyId !== propertyId),
    })),

  removeRoom: (propertyId, roomId) =>
    set((store) => ({
      rooms: store.rooms.map((room) => ({
        ...room,
        roomsData:
          room.propertyId === propertyId
            ? room.roomsData.filter((r) => r.id !== roomId)
            : room.roomsData,
      })),
    })),

  editRoom: (propertyId, roomId, key, value) =>
    set((store) => ({
      rooms: store.rooms.map((room) => ({
        ...room,
        roomsData:
          room.propertyId === propertyId
            ? room.roomsData.map((data) =>
                data.id === roomId ? { ...data, [key]: value } : data
              )
            : room.roomsData,
      })),
    })),
}));

export default useAddRoomsStore;
