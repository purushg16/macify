export default interface Guest {
  _id: string;
  guestName: string;
  age: number;
  phone: number;
  dob: Date;
  gender: string | "Male" | "Female" | null;
  idProof: string;
  idProofType: "passport" | "aadhar" | null;
}
