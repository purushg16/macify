import { create } from "zustand";

export interface ApproveBookingProperty {
  bookingId: string | undefined;
  roomId?: string | undefined;
  bedId?: string | undefined;
}

export interface ApproveBookingProperties {
  propertyId: string | undefined;
  bookings: ApproveBookingProperty[] | undefined;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  groupId: string | undefined;
  paid: number | undefined;
  balance: number | undefined;
}

interface ApproveBookingStore {
  singlBooking: ApproveBookingProperties[] | undefined;
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

  setSingleBooking: (groupId, field, value) => {
    set((store) => ({
      singlBooking: store.singlBooking?.map((booking) =>
        booking.groupId === groupId ? { ...booking, [field]: value } : booking
      ),
    }));
  },
}));

export default useApproveBookingStore;
