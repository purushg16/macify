import { create } from "zustand";
import { gender, idProofType } from "../entities/createBooking";

interface BookingGuestStoreInterface {
  guestName: string;
  age: number | null;
  gender: gender | null;
  address: string;
  idProof: string;
  idProofType: "passport" | "aadhar" | null;
}

interface BookingGuestStoreActionInterface {
  setGuestName: (name: string) => void;
  setAge: (age: number | null) => void;
  setGender: (gender: gender) => void;
  setAddress: (address: string) => void;
  setIdProof: (idProof: string) => void;
  setIdProofType: (type: idProofType) => void;
}

const useBookingGuestStore = create<
  BookingGuestStoreInterface & BookingGuestStoreActionInterface
>((set) => ({
  guestName: "",
  age: null,
  gender: null,
  address: "",
  idProof: "",
  idProofType: null,

  setGuestName: (guestName) => set({ guestName }),
  setAge: (age) => set({ age }),
  setGender: (gender) => set({ gender }),
  setAddress: (address) => set({ address }),
  setIdProof: (idProof) => set({ idProof }),
  setIdProofType: (idProofType) => set({ idProofType }),
}));

export default useBookingGuestStore;
