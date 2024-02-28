import { Box, SimpleGrid } from "@chakra-ui/react";
import scheduleData from "../../../data/bookings";
import CurrentHostingScheduleTimeline from "./CurrentHostingScheduleTimeline";
import ScheduleTimeline from "./ScheduleTimeline";
import { isDateBetween } from "../../../functions/dateChecker";

interface ScheduleBlockProps {
  date: string;
  index: number;
}

const ScheduleBlock = ({ date, index }: ScheduleBlockProps) => {
  const firstData = Object.values(scheduleData)[0];
  const secondData = Object.values(scheduleData)[1];

  return (
    <Box
      minW={{ base: 61, md: 110, lg: 160 }}
      minH={{ base: 35, md: 58 }}
      py={2}
      borderRight="1px solid #e1e1e1"
    >
      <SimpleGrid columns={2} pos="relative">
        <Box w={{ base: 29, md: 54, lg: 79 }} />

        {/* For Booking Details happened before present date (or first date) */}
        {index === 0 &&
          !(date in scheduleData) &&
          isDateBetween(firstData.start, firstData.end) && (
            <CurrentHostingScheduleTimeline data={firstData} />
          )}

        {/* Normal bookings after present date */}
        {date in scheduleData && (
          <ScheduleTimeline
            data={scheduleData[date]}
            current={scheduleData[date].start === firstData.start}
            upcoming={scheduleData[date].start === secondData.start}
          />
        )}
      </SimpleGrid>
    </Box>
  );
};

export default ScheduleBlock;
