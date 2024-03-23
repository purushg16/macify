import { create } from "zustand";
import Guest from "../entities/Guest";
import CreateBookingRooms from "../functions/createBookingRooms";

export interface GuestRoom {
  id: string;
  guests: Guest[];
}

interface BookingRoomStoreInterface {
  numberOfRooms: number | undefined;
  setNuumberOfRooms: (count: number | undefined) => void;

  rooms: GuestRoom[] | undefined;
  createRooms: (roomCount: number) => void;
  addGuests: (id: string, guests: Guest) => void;
  removeGuests: (id: string, guests: Guest) => void;

  unassignedGuests: Guest[];
  appendUnassignedGuests: (guests: Guest[]) => void;
  resetUnassignedGuests: () => void;
}

const useBookingRoomStore = create<BookingRoomStoreInterface>((set) => ({
  numberOfRooms: undefined,
  setNuumberOfRooms: (numberOfRooms) => set({ numberOfRooms }),

  rooms: undefined,
  createRooms: (count) =>
    set(() => ({
      rooms: CreateBookingRooms(count),
    })),

  addGuests: (id, guest) =>
    set((store) => ({
      rooms: store.rooms?.map((room) =>
        room.id === id ? { ...room, guests: [...room.guests, guest] } : room
      ),
      unassignedGuests: store.unassignedGuests.filter(
        (storeGuest) => storeGuest._id !== guest._id
      ),
    })),

  removeGuests: (id, guest) =>
    set((store) => ({
      rooms: store.rooms?.map((room) =>
        room.id === id
          ? { ...room, guests: room.guests.filter((g) => g._id !== guest._id) }
          : room
      ),
      unassignedGuests: [...store.unassignedGuests, guest],
    })),

  unassignedGuests: [],
  appendUnassignedGuests: (guests) =>
    set((store) => ({
      unassignedGuests: [...store.unassignedGuests, ...guests],
    })),

  resetUnassignedGuests: () => set(() => ({ unassignedGuests: [] })),
}));

export default useBookingRoomStore;
