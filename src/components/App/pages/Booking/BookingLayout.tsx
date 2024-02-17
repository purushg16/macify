import { Box, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const BookingLayout = () => {
  return (
    <Box p={10}>
      <Heading> Bookings </Heading>
      <Outlet />
    </Box>
  );
};

export default BookingLayout;
