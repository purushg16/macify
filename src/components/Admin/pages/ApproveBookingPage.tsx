import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import CheckInDatePicker from "../elements/ApproveBooking/CheckInDatePicker";
import CheckOutDatePicker from "../elements/ApproveBooking/CheckOutDatePicker";
import GuestCard from "../elements/ApproveBooking/GuestCard";
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

        <HStack mb={2}>
          <Button size="sm" colorScheme="primary">
            Select Room
          </Button>
          <Button size="sm" colorScheme="primary">
            Select Bed
          </Button>
        </HStack>

        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 4 }}
          p={4}
          spacing={4}
          borderRadius={10}
          border="1px dashed"
          borderColor="gray.100"
        >
          <GuestCard />
          <GuestCard />
        </SimpleGrid>
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
