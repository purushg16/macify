import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { BsPersonFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

interface Props {
  desc: string;
  startDate: Date;
  endDate: Date;
  first?: boolean;
}

const ScheduleTimeline = ({
  desc,
  startDate,
  endDate,
  first = false,
}: Props) => {
  const duration =
    Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000)
    ) * 2;

  return (
    <Box
      borderRadius={10}
      zIndex={10}
      onClick={() =>
        alert(`Title: ${desc}\n Start: ${startDate}\n End: ${endDate}`)
      }
      w={{ base: 29 * duration, md: 54 * duration, lg: 79 * duration }}
      border="1px solid"
      borderColor={first ? "#7edf9a" : "#ffe36e"}
      bg={first ? "#D3EBDA" : "#FAF5E0"}
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
