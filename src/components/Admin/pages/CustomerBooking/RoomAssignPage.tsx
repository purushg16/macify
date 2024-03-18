import { Button, SimpleGrid } from "@chakra-ui/react";
import BookingFooter from "../../elements/Booking/BookingFooter";
import { Link } from "react-router-dom";
import AssignRoomCard from "../../elements/Booking/AssignRoomCard";

const RoomAssignPage = () => {
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
        <AssignRoomCard />
        <AssignRoomCard />
      </SimpleGrid>
      <BookingFooter
        title="Room Partition"
        subheading="Assign rooms for each group of your homies"
        note="Tap on rooms to allocate"
        buttons={
          <>
            <Link to="/booking/5">
              <Button> Back </Button>
            </Link>
            <Link to="/booking/7">
              <Button colorScheme="primary"> Next </Button>
            </Link>
          </>
        }
      />
    </>
  );
};

export default RoomAssignPage;
