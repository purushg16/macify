interface ApproveBookingProperty {
  bookingId?: string;
  roomId?: string;
  bedId?: string;
}

export default interface ApproveBooking {
  propertyId: string;
  bookings: ApproveBookingProperty[];
  checkIn: Date | string;
  checkOut: Date | string;
  groupId: string;
  paid: number;
  balance: number;
}
