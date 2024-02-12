import { Box, SimpleGrid } from "@chakra-ui/react";
import scheduleData from "../../../data/scheduleData";
import FirstScheduleTimeline from "./FirstScheduleTimeline";
import ScheduleTimeline from "./ScheduleTimeline";

interface Props {
  date: string;
  index: number;
}

const ScheduleBlock = ({ date, index }: Props) => {
  const firstData = Object.values(scheduleData)[0];
  const secondData = Object.values(scheduleData)[1];

  const duration =
    Math.ceil(
      (firstData.end.getTime() - firstData.start.getTime()) /
        (24 * 60 * 60 * 1000)
    ) * 1.5;

  function isDateBetween(startDate: Date, endDate: Date) {
    const currentDate = new Date().toJSON().slice(0, 10);
    const today = new Date(currentDate);
    return (
      startDate.getTime() <= today.getTime() &&
      today.getTime() <= endDate.getTime()
    );
  }

  return (
    <Box
      minW={{ base: 61, md: 110, lg: 160 }}
      py={2}
      borderRight="1px solid #e1e1e1"
    >
      <SimpleGrid columns={2} pos="relative">
        <Box w={{ base: 29, md: 54, lg: 79 }} />

        {index === 0 &&
          !(date in scheduleData) &&
          isDateBetween(firstData.start, firstData.end) && (
            <FirstScheduleTimeline duration={duration} data={firstData} />
          )}

        {date in scheduleData && (
          <ScheduleTimeline
            desc={scheduleData[date].title}
            startDate={scheduleData[date].start}
            endDate={scheduleData[date].end}
            current={scheduleData[date].start === firstData.start}
            upcoming={scheduleData[date].start === secondData.start}
          />
        )}
      </SimpleGrid>
    </Box>
  );
};

export default ScheduleBlock;
