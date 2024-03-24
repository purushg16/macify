import { create } from "zustand";
import AddBedInteface from "../entities/addBed";
import { v4 as uuidv4 } from "uuid";

interface AddBedStore {
  storeBeds: AddBedInteface[];
  addBeds: (propertyId: string, roomId: string, bedNo: number) => void;
  removeBed: (propertyId: string, roomId: string) => void;
  clearBed: (propertyId: string, roomId: string) => void;
}

const useAddBedsStore = create<AddBedStore>((set) => ({
  storeBeds: [],
  addBeds: (propertyId, roomId, bedNo) =>
    set((store) => {
      const existingPropertyIndex = store.storeBeds.findIndex(
        (bed) => bed.propertyId === propertyId && bed.roomId === roomId
      );

      if (existingPropertyIndex !== -1) {
        return {
          storeBeds: store.storeBeds.map((bed, index) =>
            index === existingPropertyIndex
              ? {
                  ...bed,
                  bedsData: [...bed.bedsData, { id: uuidv4(), bedNo: bedNo }],
                }
              : bed
          ),
        };
      }
      return {
        storeBeds: [
          ...store.storeBeds,
          { propertyId, roomId, bedsData: [{ bedNo: bedNo, id: uuidv4() }] },
        ],
      };
    }),

  removeBed: (propertyId, roomId) =>
    set((store) => ({
      storeBeds:
        store.storeBeds.length > 0
          ? store.storeBeds.map((bed) =>
              bed.propertyId === propertyId && roomId === bed.roomId
                ? {
                    ...bed,
                    bedsData: bed.bedsData.filter(
                      (_, index) => index < bed.bedsData.length - 1
                    ),
                  }
                : bed
            )
          : [],
    })),

  clearBed: (propertyId, roomId) =>
    set((store) => ({
      storeBeds: store.storeBeds.map((b) =>
        b.propertyId === propertyId && roomId === b.roomId
          ? { ...b, bedsData: [] }
          : b
      ),
    })),
}));

export default useAddBedsStore;
