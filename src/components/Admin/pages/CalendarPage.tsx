import { Flex, SimpleGrid } from "@chakra-ui/react";
import CalendarCard from "../elements/CalendarCard";
import { BsBuilding, BsCalendar } from "react-icons/bs";
import { FaColumns } from "react-icons/fa";
import AnimateMove from "../../motions/Move";
import Title from "../elements/Title";

const CalendarPage = () => {
  return (
    <Flex flexDir="column" gap={8}>
      <Title heading="Calendar" subtitle="Pick the view!" align="left" />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        <AnimateMove delay={0.2}>
          <CalendarCard
            icon={BsCalendar}
            title="Single Calendar"
            subtitle="Inspect booking data in monthly view"
            route="single"
            number="1"
          />
        </AnimateMove>
        <AnimateMove delay={0.4}>
          <CalendarCard
            icon={FaColumns}
            title="Multi-Calendar"
            subtitle="Inspect booking data in a daily basis"
            route="multi"
            number="2"
          />
        </AnimateMove>
        <AnimateMove delay={0.6}>
          <CalendarCard
            icon={BsBuilding}
            title="Hostel"
            number="3"
            subtitle="Inspect hostel booking data in monthly view"
            route="hostel"
          />
        </AnimateMove>
      </SimpleGrid>
    </Flex>
  );
};

export default CalendarPage;
