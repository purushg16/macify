import { Box, Flex } from "@chakra-ui/react";
import DateBlock from "./DateBlock";
import Schedular from "./Schedular";
import DateGenerator from "../../../generator/dateGenerator";

const ScheduleContainer = () => {
  const dates = DateGenerator({ months: 6 });

  return (
    <Box
      borderTop="1px solid #e2e2e2"
      w="100%"
      overflowX="auto"
      sx={{ "&::-webkit-scrollbar": { height: 0 } }}
    >
      {/* Redering Date Blocks */}
      <Flex pt={3}>
        {dates.map((date, i) => (
          <DateBlock key={i} currentDate={date} />
        ))}
      </Flex>

      {/* Rendering List of Properties Schedules */}
      <Flex flexDir="column" gap={{ base: 4, md: 4, lg: 8 }}>
        <Schedular propertyName="Ganga" propertyNumber="8" dates={dates} />
        <Schedular propertyName="Yamuna" propertyNumber="12" dates={dates} />
      </Flex>
    </Box>
  );
};

export default ScheduleContainer;
