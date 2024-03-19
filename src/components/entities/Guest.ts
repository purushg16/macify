export default interface Guest {
  id?: string;
  name: string;
  age: number;
  phone: number;
  dob: string;
  gender: string | "Male" | "Female" | null;
}
