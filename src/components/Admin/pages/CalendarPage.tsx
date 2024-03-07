import { Flex, Heading } from "@chakra-ui/react";
import ScheduleContainer from "../elements/SingleSchedular/ScheduleContainer";
import BookingDetailsModal from "../elements/SingleSchedular/BookingDetailsModal";

const CalendarPage = () => {
  return (
    <Flex flexDir="column" gap={8}>
      <Heading> Calendar </Heading>
      <ScheduleContainer />
      <BookingDetailsModal />
    </Flex>
  );
};

export default CalendarPage;
