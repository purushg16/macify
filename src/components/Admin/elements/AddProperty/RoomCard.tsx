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
import { TbBed } from "react-icons/tb";
import Room from "../../../entities/room";

const RoomCard = ({ room }: { room: Room }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const attrs = useLongPress(() => onOpen());

  return (
    <Box
      {...attrs}
      borderRadius="20px 20px 0px 0px"
      m="auto"
      w="100%"
      h={140}
      bg="primary.100"
      pos="relative"
      display="flex"
      justifyContent="end"
      alignItems="center"
      border="5px solid"
      borderColor="gray.100"
      borderBottom="none"
    >
      <Text pos="absolute" top={1} left={3} color="white">
        {room.roomName}
      </Text>
      <VStack>
        <HStack bg="white" borderRadius={99} px={2} mr={2}>
          <Text fontSize="lg"> {room.capacity} </Text>
          <Icon as={TbBed} boxSize={4} />
        </HStack>
        <HStack bg="white" borderRadius={99} px={2} mr={2}>
          <Text fontSize="lg"> {room.capacity} </Text>
          <Icon as={BsPeopleFill} boxSize={4} />
        </HStack>
      </VStack>
      <RoomDetailsEditModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default RoomCard;
