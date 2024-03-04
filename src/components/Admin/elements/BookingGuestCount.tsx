import { Icon, Text, Box } from "@chakra-ui/react";
import { BsPeopleFill } from "react-icons/bs";

const BookingGuestCount = ({ count }: { count: number | string }) => {
  return (
    <Box bg="white" borderRadius={10} px={4} py={2} w="max-content">
      <Text>
        <Icon as={BsPeopleFill} /> {count}
      </Text>
    </Box>
  );
};

export default BookingGuestCount;
