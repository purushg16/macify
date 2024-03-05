import { create } from "zustand";
import ApproveBooking from "../entities/approveBooking";

export interface ApproveBookingProperty {
  bookingId: string | undefined;
  roomId?: string | undefined;
  bedId?: string | undefined;
}

interface ApproveBookingProperties {
  propertyId: string | undefined;
  bookings: ApproveBookingProperty[] | undefined;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  groupId: string | undefined;
  paid: number | undefined;
  balance: number | undefined;
  bookingPostValue: ApproveBooking | undefined;
}

interface ApproveBookingStoreActions {
  setPropertyId: (propertyId: string | undefined) => void;
  setBookings: (booking: ApproveBookingProperty) => void;
  setCheckIn: (checkIn: Date | undefined) => void;
  setCheckOut: (checkOut: Date | undefined) => void;
  setGroupId: (groupId: string | undefined) => void;
  setPaid: (paid: number | undefined) => void;
  setBalance: (balance: number | undefined) => void;
  setBookingPostValue: () => void;
}

type ApproveBookingStore = ApproveBookingProperties &
  ApproveBookingStoreActions;

const updateOrAddBooking = (
  existingBookings: ApproveBookingProperty[] | undefined,
  newBooking: ApproveBookingProperty
): ApproveBookingProperty[] => {
  if (!existingBookings) {
    // If the array is undefined, create a new array with the new booking
    return [newBooking];
  }

  const existingIndex = existingBookings.findIndex(
    (booking) => booking.bookingId === newBooking.bookingId
  );

  if (existingIndex !== -1) {
    // If the booking with the same ID exists, update it
    existingBookings[existingIndex] = {
      ...existingBookings[existingIndex],
      ...newBooking,
    };
    return [...existingBookings];
  }

  // If the booking with the same ID doesn't exist, add a new booking
  return [...existingBookings, newBooking];
};

const useApproveBookingStore = create<ApproveBookingStore>((set) => ({
  propertyId: undefined,
  bookings: undefined,
  currentRoomId: undefined,
  checkIn: undefined,
  checkOut: undefined,
  groupId: undefined,
  paid: undefined,
  balance: undefined,
  setPropertyId: (propertyId) => set({ propertyId }),
  setBookings: (booking) =>
    set((store) => ({
      bookings: updateOrAddBooking(store.bookings, booking),
    })),
  setCheckIn: (checkIn) => set({ checkIn }),
  setCheckOut: (checkOut) => set({ checkOut }),
  setGroupId: (groupId) => set({ groupId }),
  setPaid: (paid) => set({ paid }),
  setBalance: (balance) => set({ balance }),

  bookingPostValue: undefined,
  setBookingPostValue: () =>
    set((store) => ({
      bookingPostValue: {
        propertyId: store.propertyId!,
        bookings: store.bookings!,
        checkIn: store.checkIn!,
        checkOut: store.checkOut!,
        groupId: store.groupId!,
        paid: store.paid!,
        balance: store.balance!,
      },
    })),
}));

export default useApproveBookingStore;
