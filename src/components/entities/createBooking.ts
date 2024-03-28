export type gender = "Male" | "Female";
export type idProofType = "passport" | "aadhar";

export interface CustomerBookingGuest {
  guests: CustomerBookingGuestDetails[];
}

export interface CustomerBookingGuestDetails {
  guestName: string;
  age: number;
  phone: number;
  dob: Date;
  gender: "male" | "female";
  idProof: string;
  idProofType: "passport" | "aadhar" | null;
}

export default interface CreateBooking {
  propertyId: string;
  bookings: CustomerBookingGuest[];
  checkIn: Date | string;
  checkOut: Date | string;
}
