interface BookingGuest {
  guestName: string;
  age: number;
  address: string;
  idProofType: string;
  idProof: string;
  _id: string;
}

interface Booking {
  _id: string;
  guests: BookingGuest[];
  checkIn: string;
  checkOut: string;
}

export default interface BookingDetails {
  _id: string;
  property: {
    _id: string;
    propertyName: string;
  };
  bookings: Booking[];
  paid: number;
  balance: number;
  approved: boolean;
  __v: 0;
}
