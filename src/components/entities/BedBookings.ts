import Guest from "./Guest";

export default interface BedBooking {
  approved: true;
  bed: string;
  checkIn: string;
  checkOut: string;
  createdAt: string;
  group: string;
  guests: Guest[];
  property: string;
  room: string;
  user: string;
  _id: string;
}
