import Guest from "../entities/Guest";
import { v4 } from "uuid";

const createGuest = (file?: string) => {
  return {
    id: v4(),
    guestName: "",
    age: parseInt(""),
    phone: parseInt(""),
    dob: null,
    gender: null,
    idProof: file,
    idProofType: null,
  } as unknown as Guest;
};

export default createGuest;
