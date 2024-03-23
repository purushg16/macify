import Guest from "./Guest";

interface Booking {
  _id: string;
  guests: Guest[];
  checkIn: string;
  checkOut: string;
}

export default interface BookingDetails {
  _id: string;
  property: {
    _id: string;
    propertyName: string;
    propertyType: string;
  };
  bookings: Booking[];
  paid: number;
  balance: number;
  approved: boolean;
  __v: number;
}
