import { Box, HStack, Icon, Show, Text } from "@chakra-ui/react";
import { BsPersonFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import schedule from "../../../entities/schedule";
import { durationCalculator } from "../../../functions/durationCalculator";

interface ScheduleTimelineProps {
  data: schedule;
  current?: boolean;
  upcoming?: boolean;
}

const ScheduleTimeline = ({
  data,
  current = false,
  upcoming = false,
}: ScheduleTimelineProps) => {
  const desc = data.title;
  const startDate = data.start;
  const endDate = data.end;

  const scheduleBlockWidth = durationCalculator(
    startDate.getTime(),
    endDate.getTime()
  );

  const bg = current ? "#D3EBDA" : upcoming ? "#e0d0fb" : "#FAF5E0";
  const border = current ? "#7edf9a" : upcoming ? "#b793f3" : "#ffe36e";

  return (
    <Box
      pos="absolute"
      left={{
        base: 8,
        md: 14,
        lg: 20,
      }} // 20 is perfect centre day
      borderRadius={10}
      zIndex={10}
      onClick={() =>
        alert(`Title: ${desc}\n Start: ${startDate}\n End: ${endDate}`)
      }
      w={{
        base: 31 * scheduleBlockWidth,
        md: 56 * scheduleBlockWidth,
        lg: 81 * scheduleBlockWidth,
      }}
      border="1px solid"
      borderColor={border}
      bg={bg}
      cursor="pointer"
      p={2}
    >
      <Show above="md">
        <HStack alignItems="center">
          <Text display="contents">
            <Icon
              as={BsPersonFill}
              color="gray"
              boxSize={{ sm: 2, md: 2, lg: 4 }}
            />
            3
          </Text>

          <Text px={{ base: 2, md: 2 }}>|</Text>

          <Text display="contents">
            <Icon as={FaMoon} color="gray" boxSize={{ sm: 2, md: 2, lg: 3 }} />3
          </Text>
        </HStack>
      </Show>
    </Box>
  );
};

export default ScheduleTimeline;
