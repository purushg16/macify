import { create } from "zustand";
import Manager from "../../entities/manager";

export type PropertyType = "Hostel" | "Flat" | "Villa" | undefined;

interface AddPropertyStore {
  propertyName: string | undefined;
  propertyType: PropertyType;
  rentWithin: boolean;
  numberOfRooms: number | undefined;
  checkInTime: string | undefined;
  checkOutTime: string | undefined;
  amenities: string[] | undefined;
  address: string | undefined;
  city: string | undefined;
  zipCode: string | undefined;
  country: string | undefined;
  manager: Manager | undefined;
}

interface AddPropertyStoreActions {
  setPropertyName: (propertyName: string | undefined) => void;
  setPropertyType: (propertyType: PropertyType | undefined) => void;
  setRentWithin: (rentWithin: boolean) => void;
  setNumberOfRooms: (numberOfRooms: number | undefined) => void;
  setCheckInTime: (checkInTime: string | undefined) => void;
  setCheckOutTime: (checkOutTime: string | undefined) => void;
  setAmenities: (amenities: string[] | undefined) => void;
  setAddress: (address: string | undefined) => void;
  setCity: (city: string | undefined) => void;
  setZipCode: (zipCode: string | undefined) => void;
  setCountry: (country: string | undefined) => void;
  setManager: (manager: Manager | undefined) => void;
}

const useAddPropertyStore = create<AddPropertyStore & AddPropertyStoreActions>(
  (set) => ({
    propertyName: undefined,
    propertyType: undefined,
    rentWithin: false,
    numberOfRooms: undefined,
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
    setNumberOfRooms: (numberOfRooms) => set({ numberOfRooms }),
    setCheckInTime: (checkInTime) => set({ checkInTime }),
    setCheckOutTime: (checkOutTime) => set({ checkOutTime }),
    setAmenities: (amenities) => set({ amenities }),
    setAddress: (address) => set({ address }),
    setCity: (city) => set({ city }),
    setZipCode: (zipCode) => set({ zipCode }),
    setCountry: (country) => set({ country }),
    setManager: (manager) => set({ manager }),
  })
);

export default useAddPropertyStore;
