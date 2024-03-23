import { create } from "zustand";
import Guest from "../entities/Guest";

type params = keyof Guest;

interface BookingGuestStoreInterface {
  guests: Guest[];
  appendGuests: (guests: Guest) => void;
  editGuests: (id: string, param: params, value: string | Date) => void;
  clearGuests: () => void;
}

const useBookingGuestStore = create<BookingGuestStoreInterface>((set) => ({
  guests: [],
  appendGuests: (guest) =>
    set((store) => ({ guests: [...store.guests, guest] })),
  editGuests: (id, param, value) =>
    set((store) => ({
      guests: store.guests.map((guest) =>
        guest._id === id ? { ...guest, [param]: value } : guest
      ),
    })),
  clearGuests: () => set(() => ({ guests: [] })),
}));

export default useBookingGuestStore;
