import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaRegMoon } from "react-icons/fa";
import {
  daysBetweenDates,
  durationCalculator,
} from "../../../functions/durationCalculator";
import { TimelineBookingDetails } from "../../../api/admin-client";
import useBookingModalStore from "../../../store/bookingDetailsModalStore";
import useEditBookingStore from "../../../store/editBookingStore";
import { BiGroup } from "react-icons/bi";

interface ScheduleTimelineProps {
  data: TimelineBookingDetails;
  behind?: boolean;
  current?: boolean;
  upcoming?: boolean;
}

const ScheduleTimeline = ({
  data,
  behind = false,
  current = false,
  upcoming = false,
}: ScheduleTimelineProps) => {
  const isOpen = useBookingModalStore((s) => s.isOpen);
  const toggleModal = useBookingModalStore((s) => s.toggleModal);
  const setCurrentDetail = useBookingModalStore((s) => s.setCurrentDetail);
  const appendEditBooking = useEditBookingStore(
    (s) => s.setEditBookingsEntries
  );
  const editBookingEntries = useEditBookingStore((s) => s.editBookingEntries);

  const startDate = new Date(data.checkIn);
  const endDate = new Date(data.checkOut);

  const bg = current ? "#D3EBDA" : upcoming ? "#e0d0fb" : "#FAF5E0";
  const border = current ? "#7edf9a" : upcoming ? "#b793f3" : "#ffe36e";

  const scheduleBlockWidth = durationCalculator(
    behind ? new Date().getTime() : startDate.getTime(),
    endDate.getTime()
  );

  const handleToggle = () => {
    if (isOpen) setCurrentDetail(undefined);
    else {
      setCurrentDetail(data);
      if (
        data &&
        (editBookingEntries?.findIndex(
          (entry) => entry.bookingId === data._id
        ) === -1 ||
          !editBookingEntries)
      ) {
        appendEditBooking({
          bookingId: data?._id,
          propertyId: data?.property,
          checkIn: new Date(data?.checkIn),
          checkOut: new Date(data?.checkOut),
          bedId: data?.bed,
          roomId: data?.room,
        });
      }
    }
    toggleModal();
  };

  return (
    <Box
      pos="absolute"
      left={{
        base: behind ? 0 : 8,
        md: behind ? 0 : 14,
        lg: behind ? 0 : 20,
      }} // 20 is perfect centre day
      borderRadius={10}
      borderStartRadius={behind ? 0 : 10}
      zIndex={10}
      onClick={handleToggle}
      w={{
        base: (behind ? 47 : 31) * scheduleBlockWidth,
        md: (behind ? 56 + 28 : 56) * scheduleBlockWidth,
        lg: (behind ? 81 + 40 : 81) * scheduleBlockWidth,
      }}
      border="1px solid"
      borderColor={border}
      bg={bg}
      cursor="pointer"
      p={2}
      py={0}
    >
      {/* <Show above="md"> */}
      <HStack alignItems="center">
        <Text display="contents" fontSize="xs">
          <Icon as={BiGroup} boxSize={{ sm: 4, md: 2, lg: 4 }} />
          {data.guests.length}
        </Text>

        <Text px={{ base: 2, md: 2 }} fontSize="xs">
          |
        </Text>

        <Text display="contents" fontSize="xs">
          <Icon as={FaRegMoon} boxSize={{ sm: 3, md: 2, lg: 3 }} />
          {daysBetweenDates(startDate, endDate)}
        </Text>
      </HStack>
      {/* </Show> */}
    </Box>
  );
};

export default ScheduleTimeline;
