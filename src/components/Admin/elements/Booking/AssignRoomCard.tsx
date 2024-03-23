import { Flex, Text } from "@chakra-ui/react";
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
      <Flex
        flexWrap="wrap"
        gap={4}
        borderRadius={10}
        border="1px dashed"
        borderColor="gray"
        p={4}
        pb={12}
        pos="relative"
        maxWidth="100%"
        overflowX="auto"
      >
        {guests.map((guest) => (
          <RoomGuestTag key={guest._id} guest={guest} roomId={room.id} />
        ))}
        <AvailableGuestModal roomId={room.id} />
      </Flex>
    </Flex>
  );
};

export default AssignRoomCard;
