import { PropertyType } from "../store/AddProperty/addPropertyBasicStore";
import { PropertyRoom } from "./property";

export default interface PropertyRespone {
  _id: string;
  propertyName: string;
  propertyType: PropertyType;
  rentWithin: boolean;
  rooms: PropertyRoom[];
  checkInTime?: string;
  __v: 0;
}
