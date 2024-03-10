import PropertyRespone from "../entities/PropertyResponse.ts";
import { AddPropertyBasicInterface } from "../entities/addPropertyBasicInterface.ts";
import { AddPropertyRoomInterface } from "../entities/addPropertyRoomInterface.ts";
import Property, { PropertyRoom } from "../entities/property.ts";
import APIClient from "./api-client";

export interface PropertyService
  extends AddPropertyRoomInterface,
    AddPropertyBasicInterface {}

const getAllProperties = new APIClient<PropertyRespone>(
  "/property/getAllProperty"
);

const getAvailableRooms = new APIClient<PropertyRoom>(
  "/booking/getAvailableRooms"
);

const getAvailableBeds = new APIClient<PropertyRoom>(
  "/booking/getAvailableBeds"
);

const getSingleProperty = new APIClient<Property>("/property/getProperty");
const postNewProperty = new APIClient<PropertyService>("/property/addProperty");

const editProperty = new APIClient<PropertyService>("/property/editProperty");

export {
  postNewProperty,
  getSingleProperty,
  getAllProperties,
  editProperty,
  getAvailableRooms,
  getAvailableBeds,
};
