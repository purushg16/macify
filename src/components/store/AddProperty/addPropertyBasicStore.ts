import { create } from "zustand";
import Manager from "../../entities/manager";
import { AddPropertyBasicInterface } from "../../entities/addPropertyBasicInterface.ts";

export type PropertyType = "Hostel" | "Flat" | "Villa" | undefined;

interface AddPropertyStoreActions {
  setPropertyName: (propertyName: string | undefined) => void;
  setPropertyType: (propertyType: PropertyType | undefined) => void;
  setRentWithin: (rentWithin: boolean) => void;
  setCheckInTime: (checkInTime: string | undefined) => void;
  setCheckOutTime: (checkOutTime: string | undefined) => void;
  setAmenities: (amenity: string | undefined) => void;
  setAddress: (address: string | undefined) => void;
  setCity: (city: string | undefined) => void;
  setZipCode: (zipCode: string | undefined) => void;
  setCountry: (country: string | undefined) => void;
  setManager: (manager: Manager | undefined) => void;
}

const useAddPropertyStore = create<
  AddPropertyBasicInterface & AddPropertyStoreActions
>((set) => ({
  propertyName: undefined,
  propertyType: undefined,
  rentWithin: false,
  checkInTime: undefined,
  checkOutTime: undefined,
  amenities: undefined,
  address: undefined,
  city: undefined,
  zipCode: undefined,
  country: undefined,
  manager: undefined,
  setPropertyName: (propertyName) => set({ propertyName }),
  setPropertyType: (propertyType) => set({ propertyType }),
  setRentWithin: (rentWithin) => set({ rentWithin }),
  setCheckInTime: (checkInTime) => set({ checkInTime }),
  setCheckOutTime: (checkOutTime) => set({ checkOutTime }),
  setAmenities: (amenity) =>
    set((store) => ({
      amenities: store.amenities
        ? store.amenities.includes(amenity!)
          ? store.amenities.filter((a) => a !== amenity)
          : [...store.amenities, amenity!]
        : [amenity!],
    })),
  setAddress: (address) => set({ address }),
  setCity: (city) => set({ city }),
  setZipCode: (zipCode) => set({ zipCode }),
  setCountry: (country) => set({ country }),
  setManager: (manager) => set({ manager }),
}));

export default useAddPropertyStore;
