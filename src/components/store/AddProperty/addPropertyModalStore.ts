import { create } from "zustand";
import Room from "../../entities/room";

interface AddPropertyModalInterface {
  isOpen: boolean;
  toggleOpen: () => void;
  modalRoom: Room | undefined;
  setModalRoom: (room: Room) => void;
}

const useAddPropertyModalStore = create<AddPropertyModalInterface>((set) => ({
  isOpen: false,
  toggleOpen: () =>
    set((store) => ({
      modalRoom: store.isOpen ? undefined : store.modalRoom,
      isOpen: !store.isOpen,
    })),
  modalRoom: undefined,
  setModalRoom: (room) => set(() => ({ modalRoom: room })),
}));

export default useAddPropertyModalStore;
