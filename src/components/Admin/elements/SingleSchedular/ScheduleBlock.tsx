import { Box } from "@chakra-ui/react";
import { TimelineBookings } from "../../../api/admin-client";
import BookingContainer from "./BookingContainer";

interface ScheduleBlockProps {
  date: string;
  scheduleData: TimelineBookings | undefined;
  firstLap: boolean;
}

const ScheduleBlock = ({
  date,
  scheduleData,
  firstLap,
}: ScheduleBlockProps) => {
  if (!scheduleData)
    return (
      <Box
        minW={{ base: 61, md: 110, lg: 160 }}
        minH={{ base: 35, md: 58 }}
        py={2}
        borderRight="1px solid #e1e1e1"
      />
    );

  return (
    <Box
      minW={{ base: 61, md: 110, lg: 160 }}
      minH={{ base: 35, md: 58 }}
      py={2}
      borderRight="1px solid #e1e1e1"
    >
      {scheduleData && (
        <BookingContainer
          date={date}
          scheduleData={scheduleData}
          firstLap={firstLap}
        />
      )}
    </Box>
  );
};

export default ScheduleBlock;
