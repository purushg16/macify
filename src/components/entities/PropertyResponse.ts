import { PropertyRoom } from "./property";

export default interface PropertyRespone {
  _id: string;
  propertyName: string;
  propertyType: string;
  rooms: PropertyRoom[];
  __v: 0;
}
