interface ApproveBookingProperty {
  bookingId?: string;
  roomId?: string;
  bedId?: string;
}

export default interface ApproveBooking {
  propertyId: string;
  bookings: ApproveBookingProperty[];
  checkIn: Date;
  checkOut: Date;
  groupId: string;
  paid: number;
  balance: number;
}
