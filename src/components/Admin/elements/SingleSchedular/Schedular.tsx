import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import ScheduleBlock from "./ScheduleBlock";

interface SchedularProps {
  dates: Date[];
  propertyName: string;
  propertyNumber?: string;
}

const Schedular = ({ propertyName, propertyNumber, dates }: SchedularProps) => {
  return (
    <Box
      borderTop="1px solid"
      borderColor="gray.200"
      bg="gray.50"
      w="fit-content"
    >
      {/* Propert Name with Number */}
      <Text
        width="100vw"
        position="sticky"
        left={0}
        py={2}
        fontSize="md"
        pl={2}
        borderLeft="5px solid #7edf9a"
        bg="gray.100"
      >
        {propertyName} - {propertyNumber && `  Room ${propertyNumber}`}
      </Text>

      <Flex>
        {dates.map((date, i) => (
          <ScheduleBlock key={i} date={date.toDateString()} />
        ))}
      </Flex>

      <Divider />
    </Box>
  );
};

export default Schedular;
