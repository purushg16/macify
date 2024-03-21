export type gender = "Male" | "Female";
export type idProofType = "passport" | "aadhar";

export interface CustomerBookingGuest {
  guests: CustomerBookingGuestDetails[];
}

export interface CustomerBookingGuestDetails {
  guestName: string;
  age: number;
  gender: gender;
  address: string;
  idProofType: idProofType;
  idProof: string;
}

export default interface CreateBooking {
  propertyId: string;
  bookings: CustomerBookingGuest[];
  checkIn: Date;
  checkOut: Date;
}
