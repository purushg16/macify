import { Flex, Heading } from "@chakra-ui/react";
import Schedular from "../elements/SingleSchedular/Schedular";

const CalendarPage = () => {
  return (
    <Flex flexDir="column" gap={8}>
      <Heading> Calendar </Heading>
      <Schedular />
    </Flex>
  );
};

export default CalendarPage;
