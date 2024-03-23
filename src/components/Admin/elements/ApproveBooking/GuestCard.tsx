import { Text, VStack } from "@chakra-ui/react";
import Guest from "../../../entities/Guest";

interface Props {
  guest: Guest;
}

const GuestCard = ({ guest }: Props) => {
  return (
    <VStack
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
    </VStack>
  );
};

export default GuestCard;
