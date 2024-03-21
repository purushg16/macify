import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import RoomGuestTag from "./RoomGuestTag";
import AvailableGuestModal from "./AvailableGuestModal";

const AssignRoomCard = ({ index }: { index: number }) => {
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
        <RoomGuestTag />
        <RoomGuestTag />
        <RoomGuestTag />
        <RoomGuestTag />
        <AvailableGuestModal />
      </SimpleGrid>
    </Flex>
  );
};

export default AssignRoomCard;
