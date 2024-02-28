import { Box, SimpleGrid } from "@chakra-ui/react";
import scheduleData from "../../../data/bookings";
import ScheduleTimeline from "./ScheduleTimeline";
import { isDateBetween } from "../../../functions/dateChecker";

interface ScheduleBlockProps {
  date: string;
}

const ScheduleBlock = ({ date }: ScheduleBlockProps) => {
  const firstData = Object.values(scheduleData)[0];

  const currentHosting: boolean =
    date in scheduleData &&
    isDateBetween(firstData.start, firstData.end) &&
    Object.keys(scheduleData).indexOf(date) === 0;

  const upcomingHosting: boolean =
    !currentHosting &&
    ((date in scheduleData && Object.keys(scheduleData).indexOf(date) === 1) ||
      Object.keys(scheduleData).indexOf(date) === 0);

  return (
    <Box
      minW={{ base: 61, md: 110, lg: 160 }}
      minH={{ base: 35, md: 58 }}
      py={2}
      borderRight="1px solid #e1e1e1"
    >
      <SimpleGrid columns={2} pos="relative">
        <Box w={{ base: 29, md: 54, lg: 79 }} />

        {date in scheduleData && (
          <ScheduleTimeline
            data={scheduleData[date]}
            current={currentHosting}
            upcoming={upcomingHosting}
          />
        )}
      </SimpleGrid>
    </Box>
  );
};

export default ScheduleBlock;
