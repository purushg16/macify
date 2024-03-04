import { Box, Icon, Text } from "@chakra-ui/react";
import DateFormatter from "../../functions/dateFormatter";
import { BsClockFill } from "react-icons/bs";

const BookingCheckInTime = ({ checkInTime }: { checkInTime: string }) => {
  return (
    <Box bg="white" borderRadius={10} px={4} py={2}>
      <Text display="flex" gap={2} alignItems="center">
        <Icon as={BsClockFill} /> {DateFormatter(new Date(checkInTime))}
      </Text>
    </Box>
  );
};

export default BookingCheckInTime;
