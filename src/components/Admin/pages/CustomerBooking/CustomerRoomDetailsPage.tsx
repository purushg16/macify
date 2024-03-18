import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useBookingStore from "../../../store/bookingStore";
import BookingFooter from "../../elements/Booking/BookingFooter";
import room from "../../../../assets/booking/room.png";

const ReportTimePage = () => {
  const [numOfRooms, setNumOfRooms] = useState<number | undefined>(1);
  const numberOfGuests = useBookingStore((s) => s.numberOfGuests);

  if (!numberOfGuests) return <Navigate to="/booking" />;
  return (
    <>
      <BookingFooter
        title="Rooms Needed"
        subheading="Enter number of rooms need for you!"
        children={
          <Input
            type="number"
            bg="gray.50"
            onChange={(e) =>
              setNumOfRooms(parseInt(e.target.value) || undefined)
            }
            value={numOfRooms}
          />
        }
        w={280}
        image={room}
        buttons={
          <>
            <Link to="/booking/4">
              <Button> Back </Button>
            </Link>
            <Link to="/booking/6">
              <Button colorScheme="primary"> Next </Button>
            </Link>
          </>
        }
      />
      {/* <VStack>
        <Text> Rooms Needed </Text>
        <Input
          type="number"
          bg="gray.50"
          onChange={(e) => setNumOfRooms(parseInt(e.target.value) || undefined)}
          value={numOfRooms}
        />
      </VStack>
      <Divider maxW={300} />

      <VStack
        visibility={
          numberOfGuests! > 1 && numOfRooms! > 1 ? "visible" : "hidden"
        }
      >
        <Box>
          <Text> Assign Rooms for people </Text>
          <SimpleGrid columns={3} spacing={4} py={4}>
            {Array.from({ length: numOfRooms! }).map((_, index) => (
              <Box key={index}>
                <Box borderRadius={10} bg="gray.50" w={130} aspectRatio="1/1" />
                <Text mt={2}>Room {index + 1}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>

      <VStack gap={4}>
        <Title heading="Room Details" subtitle="Preview your booking rooms" />
        <HStack>
          <Link to="/booking/3">
            <Button> Back </Button>
          </Link>
          <Link to="/booking/5">
            <Button colorScheme="primary"> Continue </Button>
          </Link>
        </HStack>
      </VStack> */}
    </>
  );
};

export default ReportTimePage;
