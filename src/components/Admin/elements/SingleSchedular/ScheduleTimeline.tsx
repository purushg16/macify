import { Box, HStack, Icon, Show, Text } from "@chakra-ui/react";
import { BsPersonFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { durationCalculator } from "../../../functions/durationCalculator";
import { TimelineBookingDetails } from "../../../api/admin-client";
import useBookingModalStore from "../../../store/bookingDetailsModalStore";

interface ScheduleTimelineProps {
  data: TimelineBookingDetails;
  current?: boolean;
  upcoming?: boolean;
}

const ScheduleTimeline = ({
  data,
  current = false,
  upcoming = false,
}: ScheduleTimelineProps) => {
  const isOpen = useBookingModalStore((s) => s.isOpen);
  const toggleModal = useBookingModalStore((s) => s.toggleModal);
  const setCurrentDetail = useBookingModalStore((s) => s.setCurrentDetail);

  const startDate = new Date(data.checkIn);
  const endDate = new Date(data.checkOut);

  const bg = current ? "#D3EBDA" : upcoming ? "#e0d0fb" : "#FAF5E0";
  const border = current ? "#7edf9a" : upcoming ? "#b793f3" : "#ffe36e";

  const scheduleBlockWidth = durationCalculator(
    startDate.getTime(),
    endDate.getTime()
  );

  const handleToggle = () => {
    if (isOpen) setCurrentDetail(undefined);
    else setCurrentDetail(data);
    toggleModal();
  };

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
      onClick={handleToggle}
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
