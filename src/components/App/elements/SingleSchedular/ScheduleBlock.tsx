import { SimpleGrid, Box } from "@chakra-ui/react";
import ScheduleTimeline from "./ScheduleTimeline";
import scheduleData from "../../../data/scheduleData";

interface Props {
  date: string;
}

const ScheduleBlock = ({ date }: Props) => {
  return (
    <Box
      minW={{ base: 61, md: 110, lg: 160 }}
      py={2}
      borderRight="1px solid #e1e1e1"
    >
      <SimpleGrid columns={2}>
        <Box w={{ base: 29, md: 54, lg: 79 }} />

        {date in scheduleData && (
          <ScheduleTimeline
            desc={scheduleData[date].title}
            startDate={scheduleData[date].start}
            endDate={scheduleData[date].end}
            first={
              scheduleData[date].start === Object.values(scheduleData)[0].start
            }
          />
        )}
      </SimpleGrid>
    </Box>
  );
};

export default ScheduleBlock;
