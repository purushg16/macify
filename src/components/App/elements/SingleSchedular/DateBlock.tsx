import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import scheduleData from "../../../data/scheduleData";
import ScheduleTimeline from "./ScheduleTimeline";

interface Props {
  date: string;
}

const DateBlock = ({ date }: Props) => {
  return (
    <Box
      minW={{ base: 61, md: 110, lg: 160 }}
      minH={150}
      display="flex"
      flexDir="column"
      gap={5}
    >
      {/* date */}
      <SimpleGrid
        pos="relative"
        id="date-block"
        borderBottom="1px solid #ECF2F3"
        pb={5}
      >
        <Text textAlign="center" fontWeight={700} fontSize="md" opacity={0.7}>
          {date.split(" ")[0]}
        </Text>
        <Text
          textAlign="center"
          fontWeight={700}
          fontSize="2xl"
          lineHeight="normal"
        >
          {date.split(" ")[1]}
        </Text>
      </SimpleGrid>

      <SimpleGrid columns={2}>
        <Box w={{ base: 29, md: 54, lg: 79 }} h={50} />

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

export default DateBlock;
