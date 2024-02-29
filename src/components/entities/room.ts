import { Bed } from "./bed";

export default interface Room {
  roomId?: string;
  roomName: string;
  guestCapacity: number;
  beds?: Bed[];
}
