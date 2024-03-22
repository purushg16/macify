import { Button, FormControl, FormHelperText, Input } from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useBookingStore from "../../../store/bookingStore";
import BookingFooter from "../../elements/Booking/BookingFooter";
import room from "../../../../assets/booking/room.png";
import useBookingRoomStore from "../../../store/bookingRoomStore";
import useBookingGuestStore from "../../../store/bookingGuestStore";

const ReportTimePage = () => {
  const numberOfGuests = useBookingStore((s) => s.numberOfGuests);
  const guests = useBookingGuestStore((s) => s.guests);
  const numOfRooms = useBookingRoomStore((s) => s.numberOfRooms);
  const setNumOfRooms = useBookingRoomStore((s) => s.setNuumberOfRooms);
  const addRooms = useBookingRoomStore((s) => s.createRooms);
  const unassignedGuests = useBookingRoomStore((s) => s.unassignedGuests);
  const appendUnassignedGuests = useBookingRoomStore(
    (s) => s.appendUnassignedGuests
  );

  const handleSubmit = () => {
    addRooms(numOfRooms!);

    const isGuestsAlreadyPresent = unassignedGuests.some((guest) =>
      guests.some((guest1) => guest.id === guest1.id)
    );

    if (!isGuestsAlreadyPresent) appendUnassignedGuests(guests);
    navigate("/booking/6");
  };

  const navigate = useNavigate();
  if (!numberOfGuests) return <Navigate to="/booking" />;
  return (
    <>
      <BookingFooter
        title="Rooms Needed"
        subheading="Enter number of rooms need for you!"
        children={
          <FormControl>
            <Input
              placeholder="Number of Rooms Needed"
              type="number"
              bg="gray.50"
              onChange={(e) =>
                setNumOfRooms(parseInt(e.target.value) || undefined)
              }
              value={numOfRooms}
              max={numberOfGuests}
            />
            <FormHelperText
              opacity={numberOfGuests < numOfRooms! ? 1 : 0}
              color="red"
            >
              Rooms can't be greater than guest count
            </FormHelperText>
          </FormControl>
        }
        w={280}
        image={room}
        buttons={
          <>
            <Link to="/booking/4">
              <Button> Back </Button>
            </Link>
            <Button
              colorScheme="primary"
              onClick={handleSubmit}
              isDisabled={!numOfRooms || numOfRooms > numberOfGuests}
            >
              Next
            </Button>
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
