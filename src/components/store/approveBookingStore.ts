import { create } from "zustand";

export interface ApproveBookingProperty {
  bookingId: string | undefined;
  roomId?: string | undefined;
  bedId?: string | undefined;
}

export interface ApproveBookingProperties {
  propertyId: string;
  bookings: ApproveBookingProperty[];
  checkIn: Date;
  checkOut: Date;
  groupId: string;
  paid: number;
  balance: number;
}

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

interface ApproveBookingStore {
  singlBooking: ApproveBookingProperties[] | undefined;
  setBookings: (groupId: string, booking: ApproveBookingProperty) => void;

  setSingleBooking: (
    groupId: string,
    field: keyof ApproveBookingProperties,
    value: string | Date | number | ApproveBookingProperty[]
  ) => void;
  appendBookings: (booking: ApproveBookingProperties) => void;
}

const useApproveBookingStore = create<ApproveBookingStore>((set) => ({
  singlBooking: undefined,

  appendBookings: (booking) => {
    set((store) => ({
      singlBooking: !store.singlBooking
        ? [booking]
        : [...store.singlBooking, booking],
    }));
  },

  setBookings: (groupId, recievedBooking) =>
    set((store) => ({
      singlBooking: store.singlBooking?.map((booking) =>
        booking.groupId === groupId
          ? {
              ...booking,
              bookings: updateOrAddBooking(
                store.singlBooking?.find((b) => b.groupId === groupId)
                  ?.bookings,
                recievedBooking
              ),
            }
          : booking
      ),
    })),

  setSingleBooking: (groupId, field, value) => {
    set((store) => ({
      singlBooking: store.singlBooking?.map((booking) =>
        booking.groupId === groupId ? { ...booking, [field]: value } : booking
      ),
    }));
  },
}));

export default useApproveBookingStore;
