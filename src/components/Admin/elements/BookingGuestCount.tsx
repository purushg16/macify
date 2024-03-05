import { Text, Box } from "@chakra-ui/react";

const BookingGuestCount = ({ count }: { count: number | string }) => {
  return (
    <Box bg="white" borderRadius={10} px={4} py={2} w="max-content">
      <Text>{count} Guests</Text>
    </Box>
  );
};

export default BookingGuestCount;
