import { Flex, Image, SimpleGrid } from "@chakra-ui/react";
import CalendarCard from "../elements/CalendarCard";
import { BsBuilding, BsCalendar } from "react-icons/bs";
import { FaColumns } from "react-icons/fa";
import AnimateMove from "../../motions/Move";
import Title from "../elements/Title";
import vector from "../../../assets/app/vector.png";

const CalendarPage = () => {
  return (
    <Flex flexDir="column" gap={8}>
      <Title
        size="3xl"
        heading="Calendar"
        subtitle="choose the view that fits now!"
        align="left"
      />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        <AnimateMove delay={0.2}>
          <CalendarCard
            icon={BsCalendar}
            title="Single Calendar"
            subtitle="View a particular hotel’s booking data 
            in monthly calendar view"
            route="single"
            number="1"
          />
        </AnimateMove>
        <AnimateMove delay={0.4}>
          <CalendarCard
            icon={FaColumns}
            title="Multi-Calendar"
            subtitle="Inspect all property's bookings in day-to-day view"
            route="multi"
            number="2"
          />
        </AnimateMove>
        <AnimateMove delay={0.6}>
          <CalendarCard
            icon={BsBuilding}
            title="Hostel"
            number="3"
            subtitle="Inspect specific hostel bookings in monthly calendar view"
            route="hostel"
          />
        </AnimateMove>
      </SimpleGrid>
      <Image
        src={vector}
        alt=""
        pos="absolute"
        opacity={0.5}
        w={500}
        bottom={-100}
        right={-100}
        zIndex={-10}
      />
    </Flex>
  );
};

export default CalendarPage;
