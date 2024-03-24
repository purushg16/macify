import { Heading, SimpleGrid, Box, Icon, Flex, Text } from "@chakra-ui/react";
import useAddRoomsStore from "../../../store/addRoomStore";
import { IoCloseCircleOutline } from "react-icons/io5";
import AddRoomDetailsModal from "./AddRoomDetailsModal";

const AddRoomSection = ({ propertyId }: { propertyId: string }) => {
  const rooms = useAddRoomsStore((s) => s.rooms).find(
    (room) => room.propertyId === propertyId
  );
  const removeRoom = useAddRoomsStore((s) => s.removeRoom);

  return (
    <Box mt={6}>
      <Heading fontSize="sm" color="gray.200" mb={2}>
        Added Rooms
      </Heading>
      <SimpleGrid columns={2} spacing={4}>
        {rooms && rooms.roomsData.length > 0 ? (
          rooms.roomsData.map((room) => (
            <Flex
              p={4}
              gap={2}
              bg="green.200"
              key={room.id}
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
                onClick={() => removeRoom(propertyId, room.id)}
              />
            </Flex>
          ))
        ) : (
          <></>
        )}

        <AddRoomDetailsModal propertyId={propertyId} />
      </SimpleGrid>
    </Box>
  );
};

export default AddRoomSection;
