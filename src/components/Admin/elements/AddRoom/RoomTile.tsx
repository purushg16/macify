import { Flex, Heading, Icon, Box, Text } from "@chakra-ui/react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { PropertyRoom } from "../../../entities/property";
import { AddRoomData } from "../../../store/addRoomStore";

const RoomTile = ({
  color,
  room,
  callback,
}: {
  color: string;
  room: AddRoomData | PropertyRoom;
  callback: () => void;
}) => {
  return (
    <Flex
      p={4}
      gap={2}
      bg={color}
      borderRadius={20}
      align="center"
      justify="space-between"
    >
      <Box textAlign="left">
        <Heading size="xs">{room.roomName}</Heading>
        <Text fontSize="xs">Capacity: {room.guestCapacity}</Text>
      </Box>
      <Icon
        as={IoCloseCircleOutline}
        color="red.500"
        cursor="pointer"
        onClick={callback}
      />
    </Flex>
  );
};

export default RoomTile;
