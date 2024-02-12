import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { BsPersonFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { durationCalculator } from "../../../generator/durationCalculator";
import { SHCEDULE_BLOCK_MULTIPLIER } from "../../../data/constants";
import schedule from "../../../entities/schedule";

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

  const scheduleBlockWidth =
    durationCalculator(startDate.getTime(), endDate.getTime()) *
    SHCEDULE_BLOCK_MULTIPLIER;

  const bg = current ? "#D3EBDA" : upcoming ? "#e0d0fb" : "#FAF5E0";
  const border = current ? "#7edf9a" : upcoming ? "#b793f3" : "#ffe36e";

  return (
    <Box
      borderRadius={10}
      zIndex={10}
      onClick={() =>
        alert(`Title: ${desc}\n Start: ${startDate}\n End: ${endDate}`)
      }
      w={{
        base: 29 * scheduleBlockWidth,
        md: 54 * scheduleBlockWidth,
        lg: 79 * scheduleBlockWidth,
      }}
      border="1px solid"
      borderColor={border}
      bg={bg}
      cursor="pointer"
      p={2}
    >
      <HStack alignItems="center">
        <Text display="contents">
          <Icon
            as={BsPersonFill}
            color="gray"
            boxSize={{ sm: 1, md: 1, lg: 4 }}
          />
          3
        </Text>

        <Text px={{ base: 0, md: 1 }}>|</Text>

        <Text display="contents">
          <Icon as={FaMoon} color="gray" boxSize={{ sm: 1, md: 1, lg: 3 }} />3
        </Text>
      </HStack>
    </Box>
  );
};

export default ScheduleTimeline;
