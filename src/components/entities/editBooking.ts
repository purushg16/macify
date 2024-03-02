interface ApproveBookingProperty {
  bookingId?: string;
  roomId?: string;
  bedId?: string;
}

export default interface ApproveBooking {
  propertyId: string;
  bookings: ApproveBookingProperty[];
  checkIn: string;
  checkOut: string;
  groupId: string;
  paid: number;
  balance: number;
}
