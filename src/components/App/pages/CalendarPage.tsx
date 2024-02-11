import { Flex, Heading } from "@chakra-ui/react";
import Schedular from "../elements/SingleSchedular/Schedular";

const CalendarPage = () => {
  return (
    <Flex flexDir="column" gap={8} px={{ base: 0, md: 2, lg: 6 }}>
      <Heading> Calendar </Heading>
      <Flex flexDir="column" gap={{ base: 4, md: 4, lg: 8 }}>
        <Schedular propertyName="Ganga" propertyNumber="8" />
        <Schedular propertyName="Yamuna" propertyNumber="9" />
      </Flex>
    </Flex>
  );
};

export default CalendarPage;
