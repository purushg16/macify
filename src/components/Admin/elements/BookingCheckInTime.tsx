import { Box, Text } from "@chakra-ui/react";

const BookingCheckInTime = ({ checkInTime }: { checkInTime: Date }) => {
  const date = checkInTime.toLocaleDateString("en-US", {
    day: "numeric",
  });
  const monthInWords = checkInTime.toLocaleDateString("en-US", {
    month: "long",
  });

  return (
    <Box bg="white" px={4} py={2} textAlign="center">
      <Text>
        {Number(date) < 9 ? "0" : ""}
        {date}
      </Text>
      <Text> {monthInWords.substring(0, 3)} </Text>
    </Box>
  );
};

export default BookingCheckInTime;
