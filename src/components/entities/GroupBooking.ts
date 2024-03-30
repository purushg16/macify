export default interface GroupBooking {
  _id: string;
  createdAt: string;
  property: {
    propertyName: string;
  };
  bookings: [
    {
      checkIn: string;
    }
  ];
  paid: number;
  balance: number;
  approved: boolean;
  __v: 0;
  guestCount: number;
}
