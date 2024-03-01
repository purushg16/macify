import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import CheckInDatePicker from "../elements/ApproveBooking/CheckInDatePicker";
import CheckOutDatePicker from "../elements/ApproveBooking/CheckOutDatePicker";
import RoomAssignBlock from "../elements/ApproveBooking/RoomAssignBlock";
import Title from "../elements/Title";

const ApproveBookingPage = () => {
  return (
    <Flex flexDir="column" gap={8}>
      <Title
        heading="Sunny's Villa"
        subtitle="Approve after assigning rooms"
        align="left"
      />
      <Divider borderColor="gray.100" maxW="7em" m="auto" />

      <Box>
        <Text mb={4}>Checking Time Details</Text>

        <VStack align="start" gap={4}>
          <CheckInDatePicker />
          <CheckOutDatePicker />
        </VStack>
      </Box>

      <Divider borderColor="gray.100" maxW="7em" m="auto" />

      <Box>
        <Text mb={4}>Guest Details</Text>
        <RoomAssignBlock />
      </Box>

      <Box mt={4}>
        <Title
          heading="Approve Booking"
          subtitle="Click ‘Approve’ to confirm booking"
        />

        <HStack justify="center" mt={4}>
          <Button> Cancel </Button>
          <Button colorScheme="primary"> Approve </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default ApproveBookingPage;
