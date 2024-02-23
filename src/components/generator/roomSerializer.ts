export default function roomSerializer(startingNumber: number, limit: number) {
  const propertyRooms = [];
  for (let index = 0; index < limit; index++) {
    const room = {
      roomName: `Room ${startingNumber}`,
      capacity: 4,
    };
    propertyRooms.push(room);
    startingNumber++;
  }
  return propertyRooms;
}
