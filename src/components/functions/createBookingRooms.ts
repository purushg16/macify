import { GuestRoom } from "../store/bookingRoomStore";
import { v4 as uuidv4 } from "uuid";

export default function CreateBookingRooms(numOfRooms: number) {
  const rooms = [] as GuestRoom[];
  for (let index = 0; index < numOfRooms!; index++) {
    rooms.push({ id: uuidv4(), guests: [] });
  }
  return rooms;
}
