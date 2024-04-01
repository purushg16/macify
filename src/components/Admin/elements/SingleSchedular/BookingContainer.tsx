import { SimpleGrid, Box } from "@chakra-ui/react";
import { TimelineBookings } from "../../../api/admin-client";
import { isDateBehind, isDateBetween } from "../../../functions/dateChecker";
import ScheduleTimeline from "./ScheduleTimeline";
import isFirstUpcoming from "../../../functions/upcomingDate";

interface BookingContainerProps {
  date: string;
  scheduleData: TimelineBookings;
  firstLap: boolean;
}

const BookingContainer = ({
  date,
  scheduleData,
  firstLap,
}: BookingContainerProps) => {
  const firstData = Object.values(scheduleData)[0];

  const behindHosting: boolean =
    !(date in Object.keys(scheduleData)) &&
    isDateBehind(new Date(firstData.checkIn));

  const currentHosting: boolean =
    date in scheduleData &&
    !behindHosting &&
    isDateBetween(new Date(firstData.checkIn), new Date(firstData.checkOut)) &&
    Object.keys(scheduleData).indexOf(date) === 0;

  const upcomingHosting: boolean =
    !currentHosting &&
    date in scheduleData &&
    isFirstUpcoming(date, Object.keys(scheduleData));

  return (
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
  );
};

export default BookingContainer;
