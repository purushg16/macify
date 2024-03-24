import { AvailableResponse } from "../entities/AvailableResponse.ts";
import PropertyRespone from "../entities/PropertyResponse.ts";
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

export {
  postNewProperty,
  getSingleProperty,
  getAllProperties,
  editProperty,
  getAvailableRooms,
  getAvailableBeds,
};
