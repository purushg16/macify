import { Box, SimpleGrid } from "@chakra-ui/react";
import ScheduleTimeline from "./ScheduleTimeline";
import { isDateBehind, isDateBetween } from "../../../functions/dateChecker";
import { TimelineBookings } from "../../../api/admin-client";

interface ScheduleBlockProps {
  date: string;
  scheduleData: TimelineBookings;
  firstLap: boolean;
}

const ScheduleBlock = ({
  date,
  scheduleData,
  firstLap,
}: ScheduleBlockProps) => {
  const firstData = Object.values(scheduleData)[0];

  const behindHosting: boolean =
    !(date in Object.keys(scheduleData)) &&
    isDateBehind(new Date(firstData.checkIn));

  const currentHosting: boolean =
    date in scheduleData &&
    isDateBetween(new Date(firstData.checkIn), new Date(firstData.checkOut)) &&
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

        {firstLap && behindHosting && (
          <ScheduleTimeline data={firstData} current={true} behind />
        )}

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
