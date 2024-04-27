import { create } from "zustand";
import Manager from "../../entities/manager";
import { AddPropertyBasicInterface } from "../../entities/addPropertyBasicInterface.ts";
import { FileWithPath } from "react-dropzone";

export type PropertyType =
  | "hostel"
  | "resort"
  | "apartment"
  | "flat"
  | "villa"
  | "hotel"
  | undefined;

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

  images: FileWithPath[];
  appendImages: (files: FileWithPath | FileWithPath[]) => void;
  removeImages: (files: FileWithPath) => void;

  clearStore: () => void;
}

const useAddPropertyStore = create<
  AddPropertyBasicInterface & AddPropertyStoreActions
>((set) => ({
  propertyName: undefined,
  propertyType: undefined,
  rentWithin: false,
  checkIn: undefined,
  checkOut: undefined,
  amenities: undefined,
  address: undefined,
  city: undefined,
  zipcode: undefined,
  country: undefined,
  manager: undefined,

  images: [],
  appendImages: (files) =>
    set((store) => ({
      images: Array.isArray(files)
        ? [...store.images, ...files]
        : [...store.images, files],
    })),
  removeImages: (file) =>
    set((store) => ({ images: store.images.filter((img) => img !== file) })),

  setPropertyName: (propertyName) => set({ propertyName }),
  setPropertyType: (propertyType) => set({ propertyType }),
  setRentWithin: (rentWithin) => set({ rentWithin }),
  setCheckInTime: (checkInTime) => set({ checkIn: checkInTime }),
  setCheckOutTime: (checkOutTime) => set({ checkOut: checkOutTime }),
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
  setZipCode: (zipCode) => set({ zipcode: zipCode }),
  setCountry: (country) => set({ country }),
  setManager: (manager) => set({ manager }),

  clearStore: () =>
    set(() => ({
      propertyName: undefined,
      propertyType: undefined,
      rentWithin: false,
      checkIn: undefined,
      checkOut: undefined,
      amenities: undefined,
      address: undefined,
      city: undefined,
      zipcode: undefined,
      country: undefined,
      manager: undefined,
    })),
}));

export default useAddPropertyStore;
