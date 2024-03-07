import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import CalendarCard from "../elements/CalendarCard";
import { BsCalendar } from "react-icons/bs";

const CalendarPage = () => {
  return (
    <Flex flexDir="column" gap={8}>
      <Heading> Calendar </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        <CalendarCard
          icon={BsCalendar}
          title="Single Calendar"
          subtitle="Inspect booking data in monthly view"
          route="single"
        />
        <CalendarCard
          icon={BsCalendar}
          title="Single Calendar"
          subtitle="Inspect booking data in monthly view"
          route="multi"
        />
        <CalendarCard
          icon={BsCalendar}
          title="Single Calendar"
          subtitle="Inspect booking data in monthly view"
          route="hostel"
        />
      </SimpleGrid>
    </Flex>
  );
};

export default CalendarPage;
