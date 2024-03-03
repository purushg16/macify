import { create } from "zustand";

interface ApproveBookingProperty {
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

interface ApproveBookingStoreActions {
  setPropertyId: (propertyId: string | undefined) => void;
  setBookings: (bookings: ApproveBookingProperty[] | undefined) => void;
  setCheckIn: (checkIn: Date | undefined) => void;
  setCheckOut: (checkOut: Date | undefined) => void;
  setGroupId: (groupId: string | undefined) => void;
  setPaid: (paid: number | undefined) => void;
  setBalance: (balance: number | undefined) => void;
}

type ApproveBookingStore = ApproveBookingProperties &
  ApproveBookingStoreActions;

const useApproveBookingStore = create<ApproveBookingStore>((set) => ({
  propertyId: undefined,
  bookings: undefined,
  checkIn: undefined,
  checkOut: undefined,
  groupId: undefined,
  paid: undefined,
  balance: undefined,

  setPropertyId: (propertyId) => set({ propertyId }),
  setBookings: (bookings) => set({ bookings }),
  setCheckIn: (checkIn) => set({ checkIn }),
  setCheckOut: (checkOut) => set({ checkOut }),
  setGroupId: (groupId) => set({ groupId }),
  setPaid: (paid) => set({ paid }),
  setBalance: (balance) => set({ balance }),
}));

export default useApproveBookingStore;
