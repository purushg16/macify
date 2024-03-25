import {
  Box,
  Flex,
  HStack,
  Icon,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Room from "../../../entities/room";
import { IconType } from "react-icons";
import useAddPropertyModalStore from "../../../store/AddProperty/addPropertyModalStore";

const RoomCard = ({ room, icon }: { room: Room; icon: IconType }) => {
  const toggle = useAddPropertyModalStore((s) => s.toggleOpen);
  const setModalRoom = useAddPropertyModalStore((s) => s.setModalRoom);

  return (
    <Box
      cursor="pointer"
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
      onClick={() => {
        toggle();
        setModalRoom(room);
      }}
    >
      <Flex w="100%">
        <Text
          bg="gray.50"
          borderRadius={99}
          px={4}
          py={1}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;"
        >
          {room.roomName}
        </Text>
        <Spacer />
        {/* <IconButton
          onClick={() => {
            toggle();
            setModalRoom(room);
          }}
          aria-label="edit-btn"
          icon={<Icon as={CiEdit} />}
          size="sm"
          bg="gray.50"
          _hover={{ bg: "gray.100" }}
          transition="all 0.7s"
        /> */}
      </Flex>
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
            <Icon as={icon} boxSize={4} />
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default RoomCard;
