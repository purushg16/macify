import { Box, Icon, Text } from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import { BookingGuest } from "../../../entities/booking";

interface Props {
  guest: BookingGuest;
}

const GuestCard = ({ guest }: Props) => {
  return (
    <Box
      bg="gray.50"
      pt={2}
      textAlign="center"
      borderRadius={10}
      cursor="pointer"
    >
      <Text mb={4}> {guest.guestName} </Text>
      <Icon as={CiUser} boxSize={100} />
    </Box>
  );
};

export default GuestCard;
