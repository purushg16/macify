import Guest from "./Guest";

export default interface CurrentHosting {
  approved: boolean;
  checkIn: string;
  checkOut: string;
  guests: Guest[];
  property: {
    propertyName: string;
    checkInTime: string;
    checkOutTime: string;
    _id: string;
  };
  _id: string;
}
