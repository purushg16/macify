import { HStack, Icon, Box, Text } from "@chakra-ui/react";
import { BsPersonFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { durationCalculator } from "../../../generator/durationCalculator";
import { fIRST_SCHEDULE_BLOCK_MULTIPLIER } from "../../../data/constants";

interface Props {
  data: {
    id: number;
    start: Date;
    end: Date;
    title: string;
  };
}

const FirstScheduleTimeline = ({ data }: Props) => {
  const blockWidth =
    durationCalculator(data.start.getTime(), data.end.getTime()) *
    fIRST_SCHEDULE_BLOCK_MULTIPLIER;

  return (
    <Box
      borderRadius="0px 10px 10px 0"
      w={{ base: 29 * blockWidth, md: 54 * blockWidth, lg: 79 * blockWidth }}
      pos="absolute"
      py={2}
      border="1px solid"
      borderColor="#7edf9a"
      bg="#D3EBDA"
      cursor="pointer"
      onClick={() =>
        alert(`Title: ${data.title}\n Start: ${data.start}\n End: ${data.end}`)
      }
    >
      <HStack alignItems="center" visibility="hidden">
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

export default FirstScheduleTimeline;
