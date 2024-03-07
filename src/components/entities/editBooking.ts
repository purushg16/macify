export default interface EditBooking {
  propertyId: string;
  bookingId: string;
  checkIn: Date;
  checkOut: Date;
  roomId?: string;
  bedId?: string;
}
