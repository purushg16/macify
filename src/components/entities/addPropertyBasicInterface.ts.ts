import Manager from "./manager";
import { PropertyType } from "../store/AddProperty/addPropertyBasicStore";

export interface AddPropertyBasicInterface {
  propertyName: string | undefined;
  propertyType: PropertyType;
  rentWithin: boolean;
  amenities: string[] | undefined;
  address: string | undefined;
  country: string | undefined;
  city: string | undefined;
  zipcode: string | undefined;
  manager: Manager | undefined;
  checkIn: string | undefined;
  checkOut: string | undefined;
}
