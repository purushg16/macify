import { create } from "zustand";

interface EditBookingProperties {
  propertyId: string | undefined;
  bookingId: string | undefined;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  roomId?: string | undefined;
  bedId?: string | undefined;
}

interface EditBookingStore {
  editBookingEntries: EditBookingProperties[] | undefined;
  setEditBookingsEntries: (booking: EditBookingProperties | undefined) => void;
  setSingleBooking: (
    groupId: string,
    field: keyof EditBookingProperties,
    value: string | Date | number | EditBookingProperties[]
  ) => void;
}

const updateOrAddBooking = (
  existingBookings: EditBookingProperties[] | undefined,
  newBooking: EditBookingProperties
): EditBookingProperties[] => {
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

const useEditBookingStore = create<EditBookingStore>((set) => ({
  editBookingEntries: undefined,

  setEditBookingsEntries: (receivedEntry) =>
    set((store) => ({
      editBookingEntries: updateOrAddBooking(
        store.editBookingEntries,
        receivedEntry!
      ),
    })),

  setSingleBooking: (bookingId, field, value) => {
    set((store) => ({
      editBookingEntries: store.editBookingEntries?.map((entry) =>
        entry.bookingId === bookingId ? { ...entry, [field]: value } : entry
      ),
    }));
  },
}));

export default useEditBookingStore;
