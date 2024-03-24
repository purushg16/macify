import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import AnimateMove from "../../../motions/Move";
import useAddRoomsStore from "../../../store/addRoomStore";
import AddRoomDetailsModal from "./AddRoomDetailsModal";
import RoomTile from "./RoomTile";

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
          rooms.roomsData.map((room, i) => (
            <AnimateMove delay={0.2} key={i}>
              <RoomTile
                color="green.200"
                room={room}
                callback={() => removeRoom(propertyId, room.id)}
              />
            </AnimateMove>
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
