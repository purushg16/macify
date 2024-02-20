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
}

const useBookingStore = create<BookingStoreInterface>((set) => ({
  numberOfGuests: undefined,
  setNumberOfGuests: (count) => {
    set(() => ({ numberOfGuests: count }));
  },
  numberOfGuestsSelected: false,
  isNumberOfGuestsSelected: (status) => {
    set(() => ({ numberOfGuestsSelected: status }));
  },

  filesUploaded: undefined,
  addFiles: (files) => {
    set((store) => ({
      filesUploaded: Array.isArray(files)
        ? [...(store.filesUploaded || []), ...files]
        : [...(store.filesUploaded || []), files],
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