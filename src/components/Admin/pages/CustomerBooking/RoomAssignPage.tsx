import { Button, SimpleGrid } from "@chakra-ui/react";
import BookingFooter from "../../elements/Booking/BookingFooter";
import { Link, Navigate } from "react-router-dom";
import AssignRoomCard from "../../elements/Booking/AssignRoomCard";
import useBookingRoomStore from "../../../store/bookingRoomStore";
import { useCustomerBooking } from "../../../hooks/useCustomer";

const RoomAssignPage = () => {
  const rooms = useBookingRoomStore((s) => s.rooms);
  const unassignedGuests = useBookingRoomStore((s) => s.unassignedGuests);
  const { mutate, isPending, isSuccess } = useCustomerBooking();

  if (isSuccess) <Navigate to="/booking/7" />;
  return (
    <>
      <SimpleGrid
        padding={4}
        spacing={8}
        bg="#f4f4f4"
        borderRadius={10}
        w="100%"
        mb={8}
      >
        {rooms?.map((room, i) => (
          <AssignRoomCard
            key={i}
            index={i + 1}
            room={room}
            guests={room.guests}
          />
        ))}
      </SimpleGrid>
      <BookingFooter
        title="Room Partition"
        subheading="Assign rooms for each group of your homies"
        buttons={
          <>
            <Link to="/booking/5">
              <Button> Back </Button>
            </Link>
            <Button
              isLoading={isPending}
              isDisabled={unassignedGuests.length > 0}
              colorScheme="primary"
              onClick={() => mutate()}
            >
              Submit
            </Button>
          </>
        }
      />
    </>
  );
};

export default RoomAssignPage;
