import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { BsPeopleFill } from "react-icons/bs";
import { useLongPress } from "@uidotdev/usehooks";
import RoomDetailsEditModal from "./RoomDetailsEditModal";
// import { TbBed } from "react-icons/tb";
import Room from "../../../entities/room";

const RoomCard = ({ room }: { room: Room }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const attrs = useLongPress(() => onOpen());

  return (
    <Box
      cursor="pointer"
      {...attrs}
      bg="primary.50"
      borderRadius={20}
      aspectRatio="1/1"
      m="auto"
      display="flex"
      p={2}
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      gap={4}
      // boxShadow="inset 1px 4px 9px -1px #00000057"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
      pos="relative"
    >
      <Text
        bg="gray.50"
        borderRadius={99}
        px={4}
        py={1}
        boxShadow="rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;"
      >
        {room.roomName}
      </Text>
      <VStack>
        <Box
          bg="gray.50"
          pos="absolute"
          bottom={2}
          right={2}
          borderRadius={20}
          px={2}
          aspectRatio="1/1"
          w="40%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;"
        >
          <HStack alignItems="baseline">
            <Text fontSize="2xl">{room.guestCapacity}</Text>
            <Icon as={BsPeopleFill} boxSize={4} />
          </HStack>
        </Box>

        {/* <HStack bg="white" borderRadius={99} px={2} mr={2}>
          <Text fontSize="lg"> {room.capacity} </Text>
          <Icon as={BsPeopleFill} boxSize={4} />
        </HStack> */}
      </VStack>
      <RoomDetailsEditModal isOpen={isOpen} onClose={onClose} room={room} />
    </Box>
  );
};

export default RoomCard;
