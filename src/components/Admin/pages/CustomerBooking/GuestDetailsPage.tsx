import { Button, Flex, Spinner } from "@chakra-ui/react";
import GuestDetailsHug from "../../elements/Booking/GuestDetailsHug";
import BookingFooter from "../../elements/Booking/BookingFooter";
import { Link, useNavigate } from "react-router-dom";
import useBookingGuestStore from "../../../store/bookingGuestStore";
import Guest from "../../../entities/Guest";

const GuestDetailsPage = () => {
  const guests = useBookingGuestStore((s) => s.guests);
  const navigate = useNavigate();

  // const isAnyFieldEmpty = () => {
  //   return guests.some((guest) =>
  //     Object.values(guest).some(
  //       (value) => value === undefined || value === null || value === ""
  //     )
  //   );
  // };

  const isAnyFieldEmpty = () => {
    return guests.some((guest) =>
      Object.keys(guest)
        .filter((key) => key !== "idProof") // Exclude idProof from the check
        .some(
          (key) =>
            !guest[key as keyof Guest] || guest[key as keyof Guest] === ""
        )
    );
  };

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
            <Button
              isDisabled={isAnyFieldEmpty()}
              colorScheme="primary"
              onClick={() => navigate("/booking/5")}
            >
              Next
            </Button>
          </>
        }
      />
    </Flex>
  );
};

export default GuestDetailsPage;
