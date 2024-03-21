import { Button, Flex, Spinner } from "@chakra-ui/react";
import GuestDetailsHug from "../../elements/Booking/GuestDetailsHug";
import BookingFooter from "../../elements/Booking/BookingFooter";
import { Link } from "react-router-dom";
import useBookingGuestStore from "../../../store/bookingGuestStore";

const GuestDetailsPage = () => {
  const guests = useBookingGuestStore((s) => s.guests);

  if (guests.length === 0) return <Spinner />;
  return (
    <Flex
      gap={4}
      flexDir="column"
      overflowY="auto"
      borderRadius={20}
      p={4}
      pt={0}
    >
      {guests.map((guest, i) => (
        <GuestDetailsHug key={guest.id!} guest={guest} i={i + 1} />
      ))}

      <BookingFooter
        title="Guest Details"
        subheading="Enter the requried details for all the homies"
        buttons={
          <>
            <Link to="/booking/3">
              <Button> Back </Button>
            </Link>
            <Link to="/booking/5">
              <Button colorScheme="primary"> Next </Button>
            </Link>
          </>
        }
      />
    </Flex>
  );
};

export default GuestDetailsPage;
