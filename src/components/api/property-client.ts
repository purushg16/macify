import { AddPropertyBasicInterface } from "../entities/addPropertyBasicInterface.ts";
import { AddPropertyRoomInterface } from "../entities/addPropertyRoomInterface.ts";
import APIClient from "./api-client";

export interface PropertyService
  extends AddPropertyRoomInterface,
    AddPropertyBasicInterface {}

interface SinglePropertyInterface {
  propertyId: string;
}

const getAllProperties = new APIClient("/property/getAllProperty");

const getSingleProperty = new APIClient<SinglePropertyInterface>(
  "/property/getProperty"
);
const postNewProperty = new APIClient<PropertyService>("/property/addProperty");

const editProperty = new APIClient<PropertyService>("/property/editProperty");

export { postNewProperty, getSingleProperty, getAllProperties, editProperty };
