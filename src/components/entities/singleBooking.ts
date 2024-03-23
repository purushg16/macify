import Guest from "./Guest";

interface Property {
  _id: string;
  propertyName: string;
  propertyType: string;
  rentWithin: boolean;
}

export default interface SingleBooking {
  _id: string;
  property: Property;
  guests: Guest[];
  checkIn: string;
  checkOut: string;
  approved: boolean;
  __v: number;
  bed: string;
  room: string;
}
