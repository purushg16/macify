import { BookingGuest } from "./booking";

export default interface CurrentHosting {
  approved: boolean;
  checkIn: string;
  checkOut: string;
  guests: BookingGuest[];
  property: {
    propertyName: string;
    checkInTime: string;
    checkOutTime: string;
    _id: string;
  };
  _id: string;
}
