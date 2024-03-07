import { Box, Flex, Spinner } from "@chakra-ui/react";
import DateBlock from "./DateBlock";
import Schedular from "./Schedular";
import DateGenerator from "../../../functions/dateGenerator";
import { useGetAllBooking } from "../../../hooks/useAdmin";
import { useRef, useState } from "react";

const ScheduleContainer = () => {
  const { data: scheduleData, isLoading } = useGetAllBooking({
    ids: ["65d958df2a773c387290a013", "65d958be2a773c387290a00f"],
  });

  const [visibleMonth, setVisibleMonth] = useState(1);
  const boxRef = useRef<HTMLDivElement>(null);
  const dates = DateGenerator({ months: visibleMonth });

  const handleScroll = () => {
    const box = boxRef.current!;
    if (box.scrollLeft + box.clientWidth === box.scrollWidth)
      setVisibleMonth(visibleMonth + 1);
    else if (box.scrollLeft === 0) setVisibleMonth(1);
  };

  if (isLoading) return <Spinner />;
  return (
    <Box
      ref={boxRef}
      onScroll={handleScroll}
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
        {Object.values(scheduleData!).map((schedule) => (
          <Schedular
            propertyName="Ganga"
            propertyNumber="8"
            dates={dates}
            scheduleData={schedule}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ScheduleContainer;
