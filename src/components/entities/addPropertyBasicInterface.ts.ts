import Manager from "./manager";
import { PropertyType } from "../store/AddProperty/addPropertyBasicStore";

export interface AddPropertyBasicInterface {
  propertyName: string | undefined;
  propertyType: PropertyType;
  rentWithin: boolean;
  checkInTime: string | undefined;
  checkOutTime: string | undefined;
  amenities: string[] | undefined;
  address: string | undefined;
  city: string | undefined;
  zipCode: string | undefined;
  country: string | undefined;
  manager: Manager | undefined;
}
