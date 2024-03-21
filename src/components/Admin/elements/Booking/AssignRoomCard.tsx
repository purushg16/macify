import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import RoomGuestTag from "./RoomGuestTag";
import AvailableGuestModal from "./AvailableGuestModal";
import Guest from "../../../entities/Guest";
import { GuestRoom } from "../../../store/bookingRoomStore";

const AssignRoomCard = ({
  guests,
  index,
  room,
}: {
  guests: Guest[];
  room: GuestRoom;
  index: number;
}) => {
  return (
    <Flex flexDir="column">
      <Text fontSize="sm"> Room {index} </Text>
      <SimpleGrid
        spacing={4}
        columns={2}
        borderRadius={10}
        border="1px dashed"
        borderColor="gray"
        p={4}
      >
        {guests.map((guest) => (
          <RoomGuestTag key={guest.id} guest={guest} roomId={room.id} />
        ))}
        <AvailableGuestModal roomId={room.id} />
      </SimpleGrid>
    </Flex>
  );
};

export default AssignRoomCard;
