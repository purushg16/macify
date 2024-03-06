import { create } from "zustand";

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
}

interface ApproveBookingStore {
  singlBooking: ApproveBookingProperties[] | undefined;
  setSingleBooking: (
    groupId: string,
    updatedFields: Partial<ApproveBookingProperties>
  ) => void;
}

const useApproveBookingStore = create<ApproveBookingStore>((set) => ({
  singlBooking: undefined,

  setSingleBooking: (groupId, updatedFields) => {
    set((store) => ({
      singlBooking: store.singlBooking?.map((booking) =>
        booking.groupId === groupId ? { ...booking, updatedFields } : booking
      ),
    }));
  },
}));

export default useApproveBookingStore;
