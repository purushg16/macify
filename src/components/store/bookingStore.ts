import { FileWithPath } from "react-dropzone";
import { create } from "zustand";

interface BookingStoreInterface {
  numberOfGuests: number | undefined;
  setNumberOfGuests: (count: number | undefined) => void;
  numberOfGuestsSelected: boolean;
  isNumberOfGuestsSelected: (status: boolean) => void;

  // files
  filesUploaded: FileWithPath[] | undefined;
  addFiles: (files: FileWithPath[] | FileWithPath) => void;
  removeFiles: (file: FileWithPath) => void;
  clearFiles: () => void;

  checkingRange: {
    startDate: Date | undefined;
    endDate: Date | undefined;
  };
  setCheckingRange: (startDate: Date, endDate: Date) => void;

  cloudinaryLink: string | undefined;
  setCloudinaryLink: (link: string | undefined) => void;

  paymentProofFile: FileWithPath[] | undefined;
  addPaymentProof: (files: FileWithPath[] | FileWithPath) => void;
  removePaymentProof: (files: FileWithPath[] | FileWithPath) => void;

  arrivalTime: string | undefined;
  setArrivalTime: (time: string) => void;
}

const useBookingStore = create<BookingStoreInterface>((set) => ({
  numberOfGuests: undefined,
  setNumberOfGuests: (count) => {
    set(() => ({ numberOfGuests: count }));
  },

  arrivalTime: undefined,
  setArrivalTime: (arrivalTime) => set({ arrivalTime }),

  numberOfGuestsSelected: false,
  isNumberOfGuestsSelected: (status) => {
    set(() => ({ numberOfGuestsSelected: status }));
  },
  checkingRange: { startDate: undefined, endDate: undefined },
  setCheckingRange: (start, end) =>
    set(() => ({ checkingRange: { startDate: start, endDate: end } })),

  cloudinaryLink: undefined,
  setCloudinaryLink: (link) => set(() => ({ cloudinaryLink: link })),

  filesUploaded: undefined,
  addFiles: (files) => {
    set((store) => ({
      filesUploaded: Array.isArray(files)
        ? [...(store.filesUploaded || []), ...files]
        : [...(store.filesUploaded || []), files],
    }));
  },

  paymentProofFile: undefined,
  addPaymentProof: (files) => {
    set((store) => ({
      paymentProofFile: Array.isArray(files)
        ? [...(store.paymentProofFile || []), ...files]
        : [...(store.paymentProofFile || []), files],
    }));
  },

  removePaymentProof: (file) => {
    set((store) => ({
      paymentProofFile:
        store.paymentProofFile?.find((f) => f === file) &&
        store.paymentProofFile.length == 1
          ? undefined
          : store.paymentProofFile?.filter((f) => f !== file),
    }));
  },

  removeFiles: (file) => {
    set((store) => ({
      filesUploaded:
        store.filesUploaded?.find((f) => f === file) &&
        store.filesUploaded.length == 1
          ? undefined
          : store.filesUploaded?.filter((f) => f !== file),
    }));
  },

  clearFiles: () => set(() => ({ filesUploaded: undefined })),
}));

export default useBookingStore;
