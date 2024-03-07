import { create } from "zustand";

interface EditBookingStore {
  propertyId: string | undefined;
  bookingId: string | undefined;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  roomId?: string | undefined;
  bedId?: string | undefined;
}

interface EditBookingStoreAction {
  setPropertyId: (propertyId: string) => void;
  setBookingId: (bookingId: string) => void;
  setCheckIn: (checkIn: Date) => void;
  setCkeckOut: (checkOut: Date) => void;
  setRoomId: (roomId: string) => void;
  setBedId: (bed: string) => void;
}

const useEditBookingStore = create<EditBookingStore & EditBookingStoreAction>(
  (set) => ({
    propertyId: undefined,
    setPropertyId: (bookingId) => set({ bookingId }),

    bookingId: undefined,
    setBookingId: (bookingId) => set({ bookingId }),

    checkIn: undefined,
    setCheckIn: (checkIn) => set({ checkIn }),

    checkOut: undefined,
    setCkeckOut: (checkOut) => set({ checkOut }),

    roomId: undefined,
    setRoomId: (roomId) => set({ roomId }),

    bedId: undefined,
    setBedId: (bedId) => set({ bedId }),
  })
);

export default useEditBookingStore;
