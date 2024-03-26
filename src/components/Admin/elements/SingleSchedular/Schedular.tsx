import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { TimelineBookings } from "../../../api/admin-client";
import ScheduleBlock from "./ScheduleBlock";

interface SchedularProps {
  dates: Date[];
  propertyName: string;
  propertyNumber?: string;
  scheduleData: TimelineBookings;
}

const Schedular = ({
  propertyName,
  propertyNumber,
  dates,
  scheduleData,
}: SchedularProps) => {
  return (
    <Box
      borderTop="1px solid"
      borderColor="gray.200"
      bg="#f4f4f4"
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
        bg="gray.50"
        textTransform="capitalize"
      >
        {propertyName} - {propertyNumber && `${propertyNumber}`}
      </Text>

      <Flex>
        {dates.map((date, i) => (
          <ScheduleBlock
            firstLap={i == 0}
            key={i}
            date={date.toISOString().substring(0, 10)}
            scheduleData={scheduleData}
          />
        ))}
      </Flex>

      <Divider />
    </Box>
  );
};

export default Schedular;
