import { create } from "zustand";
import { TimelineBookingDetails } from "../api/admin-client";

interface BookingDetailsModalStore {
  isOpen: boolean;
  toggleModal: () => void;
  currentDetail: TimelineBookingDetails | undefined;
  setCurrentDetail: (detail: TimelineBookingDetails) => void;
}

const useBookingModalStore = create<BookingDetailsModalStore>((set) => ({
  isOpen: false,
  toggleModal: () => set((store) => ({ isOpen: !store.isOpen })),
  currentDetail: undefined,
  setCurrentDetail: (detail) => set(() => ({ currentDetail: detail })),
}));

export default useBookingModalStore;
