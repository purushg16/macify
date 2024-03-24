import AddRoomInterface from "../entities/AddRoomInterface.ts";
import { AvailableResponse } from "../entities/AvailableResponse.ts";
import PropertyRespone from "../entities/PropertyResponse.ts";
import AddBedInteface from "../entities/addBed.ts";
import { AddPropertyBasicInterface } from "../entities/addPropertyBasicInterface.ts";
import { AddPropertyRoomInterface } from "../entities/addPropertyRoomInterface.ts";
import Property from "../entities/property.ts";
import APIClient from "./api-client";

export interface PropertyService
  extends AddPropertyRoomInterface,
    AddPropertyBasicInterface {}

export interface EditPropertyInterface {
  propertyId: string | undefined;
  propertyName: string | undefined;
  rentWithin: boolean;
  amenities: string[] | undefined;
  address: string | undefined;
  country: string | undefined;
  city: string | undefined;
  zipcode: string | undefined;
  manager: string | undefined;
  checkIn: string | undefined;
  checkOut: string | undefined;
}

const getAllProperties = new APIClient<PropertyRespone>(
  "/property/getAllProperty"
);

const getAvailableRooms = new APIClient<AvailableResponse>(
  "/booking/getAvailableRooms"
);

const getAvailableBeds = new APIClient<AvailableResponse>(
  "/booking/getAvailableBeds"
);

const getSingleProperty = new APIClient<Property>("/property/getProperty");
const postNewProperty = new APIClient<PropertyService>("/property/addProperty");

const editProperty = new APIClient<EditPropertyInterface>(
  "/property/editProperty"
);

const addRooms = new APIClient<AddRoomInterface>("/property/addRooms");
const addBeds = new APIClient<AddBedInteface>("/property/addBeds");

interface DeleteRoom {
  propertyId: string;
  roomId: string;
}

interface DeleteBed {
  propertyId: string;
  roomId: string;
  bedId: string;
}

const deleteRoom = new APIClient<DeleteRoom>("/property/deleteRoom");
const deleteBed = new APIClient<DeleteBed>("/property/deleteBed");

export {
  postNewProperty,
  getSingleProperty,
  getAllProperties,
  editProperty,
  getAvailableRooms,
  getAvailableBeds,
  addRooms,
  addBeds,
  deleteRoom,
  deleteBed,
};
