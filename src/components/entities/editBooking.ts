export default interface EditBooking {
  propertyId: string;
  bookingId: string;
  checkIn: Date;
  checOut: Date;
  roomId?: string;
  bedId?: string;
}
