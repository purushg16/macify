import { Text, VStack, useDisclosure } from "@chakra-ui/react";
import Guest from "../../../entities/Guest";
import GuestDetailsModal from "./GuestDetailsModal";

interface Props {
  guest: Guest;
}

const GuestCard = ({ guest }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack
      onClick={onOpen}
      gap={2}
      bg="gray.50"
      p={2}
      textAlign="center"
      borderRadius={10}
      cursor="pointer"
    >
      {guest.gender === "male" ? (
        <img
          src="https://img.icons8.com/ios-filled/40/user-male--v1.png"
          alt="user-male--v1"
        />
      ) : (
        <img
          src="https://img.icons8.com/ios-filled/40/user-female--v1.png"
          alt="user-male--v1"
        />
      )}
      <Text> {guest.guestName} </Text>
      <GuestDetailsModal isOpen={isOpen} onClose={onClose} guest={guest} />
    </VStack>
  );
};

export default GuestCard;
