export interface PropertyBed {
  bedNo: number;
  _id: string;
}

export interface PropertyRoom {
  roomName: string;
  guestCapacity: number;
  beds: PropertyBed[];
  _id: string;
}

export default interface Property {
  _id: string;
  propertyName: string;
  propertyType: string;
  rentWithin: boolean;
  amenities: string[];
  address: string;
  country: string;
  city: string;
  zipcode: string;
  manager: {
    _id: string;
    name: string;
  };
  checkInTime: string;
  checkOutTime: string;
  rooms: PropertyRoom[];
  __v: 0;
}
