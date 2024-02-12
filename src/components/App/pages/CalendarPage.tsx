import { Box, Flex, Heading } from "@chakra-ui/react";
import Schedular from "../elements/SingleSchedular/Schedular";
import DateBlock from "../elements/SingleSchedular/DateBlock";
import DateGenerator from "../../generator/scheduleTimeline";

const CalendarPage = () => {
  const dates = DateGenerator({ months: 6 });

  return (
    <Flex flexDir="column" gap={8} px={{ base: 0, md: 2, lg: 6 }}>
      <Heading> Calendar </Heading>

      <Box
        w="100%"
        overflowX="auto"
        sx={{ "&::-webkit-scrollbar": { height: 0 } }}
      >
        <Flex>
          {dates.map((date, i) => (
            <DateBlock
              key={i}
              date={date.toDateString().split(" ").slice(1, 3).join(" ")}
            />
          ))}
        </Flex>

        <Flex flexDir="column" gap={{ base: 4, md: 4, lg: 8 }}>
          <Schedular propertyName="Ganga" propertyNumber="8" dates={dates} />
          <Schedular propertyName="Yamuna" propertyNumber="9" dates={dates} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default CalendarPage;
