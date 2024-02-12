import { HStack, Icon, Box, Text } from "@chakra-ui/react";
import { BsPersonFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

interface Props {
  duration: number;
  data: {
    id: number;
    start: Date; // Example: 3 days after the first meeting
    end: Date; // Example: 5 days after the first meeting
    title: string;
  };
}

const FirstScheduleTimeline = ({ duration, data }: Props) => {
  return (
    <Box
      borderRadius="0px 10px 10px 0"
      w={{ base: 29 * duration, md: 54 * duration, lg: 79 * duration }}
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
