import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { BsPersonFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { durationCalculator } from "../../../generator/durationCalculator";
import { SHCEDULE_BLOCK_MULTIPLIER } from "../../../data/constants";

interface Props {
  desc: string;
  startDate: Date;
  endDate: Date;
  current?: boolean;
  upcoming?: boolean;
}

const ScheduleTimeline = ({
  desc,
  startDate,
  endDate,
  current = false,
  upcoming = false,
}: Props) => {
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
          <Icon as={BsPersonFill} color="gray" /> 3
        </Text>

        <Text px={{ base: 0, md: 1 }}>|</Text>

        <Text display="contents">
          <Icon as={FaMoon} boxSize={3} color="gray" /> 3
        </Text>
      </HStack>
    </Box>
  );
};

export default ScheduleTimeline;
