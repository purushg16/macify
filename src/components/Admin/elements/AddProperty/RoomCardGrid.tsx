import { GridItem, SimpleGrid } from "@chakra-ui/react";
import RoomCard from "./RoomCard";
import useAddPropertyRoomStore from "../../../store/AddProperty/addPropertyRoomStore";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";
import { BsPeopleFill } from "react-icons/bs";
import { GiBed } from "react-icons/gi";
import RoomDetailsEditModal from "./RoomDetailsEditModal";
import useAddPropertyModalStore from "../../../store/AddProperty/addPropertyModalStore";

const RoomCardGrid = () => {
  const propertyRooms = useAddPropertyRoomStore((s) => s.rooms);
  const propertyType = useAddPropertyStore((s) => s.propertyType);

  const icon = propertyType !== "hostel" ? BsPeopleFill : GiBed;

  const isOpen = useAddPropertyModalStore((s) => s.isOpen);
  const onClose = useAddPropertyModalStore((s) => s.toggleOpen);
  const room = useAddPropertyModalStore((s) => s.modalRoom);

  return (
    <SimpleGrid
      mx="auto"
      w={{ base: "100%", md: "85%", lg: "90%" }}
      columns={{ base: 2, md: 3, lg: 4 }}
      spacingX={4}
      spacingY={4}
      bg="#f6f6f6"
      p={{ base: 4, md: 3, lg: 5 }}
      borderRadius={20}
      maxH={350}
      overflowY="auto"
    >
      {propertyRooms?.map((room) => (
        <GridItem key={room.roomName}>
          <RoomCard room={room} icon={icon} />
        </GridItem>
      ))}

      {room && (
        <RoomDetailsEditModal
          isOpen={isOpen}
          onClose={onClose}
          room={room}
          hostel={propertyType === "hostel"}
        />
      )}
    </SimpleGrid>
  );
};

export default RoomCardGrid;
