export default interface EditBooking {
  propertyId: string;
  bookingId: string;
  checkIn: Date | string;
  checkOut: Date | string;
  roomId?: string;
  bedId?: string;
}
