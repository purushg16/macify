import { create } from "zustand";
import Guest from "../entities/Guest";

type params = keyof Guest;

interface BookingGuestStoreInterface {
  guests: Guest[];
  appendGuests: (guests: Guest[]) => void;
  editGuests: (id: string, param: params, value: string) => void;
}

const useBookingGuestStore = create<BookingGuestStoreInterface>((set) => ({
  guests: [],
  appendGuests: (guests) => set({ guests }),
  editGuests: (id, param, value) =>
    set((store) => ({
      guests: store.guests.map((guest) =>
        guest.id === id ? { ...guest, [param]: value } : guest
      ),
    })),
}));

export default useBookingGuestStore;
