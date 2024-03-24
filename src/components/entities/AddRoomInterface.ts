export default interface AddRoomInterface {
  propertyId: string;
  roomsData: {
    id: string;
    roomName: string;
    guestCapacity: number;
  }[];
}
