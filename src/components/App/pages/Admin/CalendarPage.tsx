import { Flex, Heading } from "@chakra-ui/react";
import ScheduleContainer from "../../elements/SingleSchedular/ScheduleContainer";

const CalendarPage = () => {
  return (
    <Flex flexDir="column" gap={8}>
      <Heading> Calendar </Heading>
      <ScheduleContainer />
    </Flex>
  );
};

export default CalendarPage;
