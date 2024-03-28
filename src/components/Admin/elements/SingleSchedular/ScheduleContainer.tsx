import { Box, Flex } from "@chakra-ui/react";
import DateBlock from "./DateBlock";
import Schedular from "./Schedular";
import DateGenerator from "../../../functions/dateGenerator";
import { useGetAllBooking } from "../../../hooks/useAdmin";
import { useRef, useState } from "react";
import BookingDetailsModal from "./BookingDetailsModal";
import { useGetAllProperties } from "../../../hooks/usePropertyServices";
import {
  useGetManagerBookings,
  useGetManagerProperties,
} from "../../../hooks/useManagerAuth";
import LoadingIndicator from "../LoadingIndicator";

const ScheduleContainer = ({ manager = false }: { manager?: boolean }) => {
  const { data: properties } = useGetAllProperties(!manager);
  const { data: mProperties } = useGetManagerProperties(manager);

  const { data: scheduleData, isLoading } = useGetAllBooking(
    {
      ids: properties?.data.map((p) => p._id),
    },
    !!properties && !manager
  );

  const { data: mScheduleData, isLoading: isMLoading } = useGetManagerBookings(
    {
      ids: mProperties?.data.map((p) => p._id),
    },
    !!mProperties && manager
  );

  const [visibleMonth, setVisibleMonth] = useState(3);
  const boxRef = useRef<HTMLDivElement>(null);
  const dates = DateGenerator({ months: visibleMonth });

  const handleScroll = () => {
    const box = boxRef.current!;
    const threshold = 2000;
    if (box.scrollLeft + box.clientWidth >= box.scrollWidth - threshold)
      setVisibleMonth(visibleMonth + 3);
    else if (box.scrollLeft === 0) setVisibleMonth(3);
  };

  if (!manager && !scheduleData) return null;
  if (manager && !mScheduleData) return null;
  const bookingDates = scheduleData ? Object.keys(scheduleData) : [];
  const mBookingDates = mScheduleData ? Object.keys(mScheduleData) : [];

  if (!manager && (isLoading || !properties))
    return <LoadingIndicator text="Properties" />;

  if (manager && (isMLoading || !mProperties))
    return <LoadingIndicator text="Properties" />;

  return (
    <Box
      maxH="90%"
      overflowY="auto"
      ref={boxRef}
      onScroll={handleScroll}
      borderTop="1px solid #e2e2e2"
      w="100%"
      overflowX="auto"
      sx={{ "&::-webkit-scrollbar": { height: 0 } }}
    >
      {/* Redering Date Blocks */}
      <Flex zIndex={999} pos="sticky" top={0} bg="white">
        {dates.map((date, i) => (
          <DateBlock key={i} currentDate={date} />
        ))}
      </Flex>

      {/* Rendering List of Properties Schedules */}
      {manager && (
        <Flex flexDir="column" gap={{ base: 4, md: 4, lg: 8 }}>
          {mProperties?.data.map((property) =>
            !property.rentWithin ? (
              <Schedular
                key={property._id}
                propertyName={property.propertyName}
                propertyNumber=""
                dates={dates}
                scheduleData={
                  mScheduleData?.[
                    mBookingDates.find((s) => s === property._id)!
                  ]
                }
              />
            ) : (
              property.rooms.map((room) => (
                <Schedular
                  key={room._id}
                  propertyName={property.propertyName}
                  propertyNumber={room.roomName}
                  dates={dates}
                  scheduleData={
                    mScheduleData?.[mBookingDates.find((s) => s === room._id)!]
                  }
                />
              ))
            )
          )}
        </Flex>
      )}

      {!manager && (
        <Flex flexDir="column" gap={{ base: 4, md: 4, lg: 8 }}>
          {properties?.data.map((property) =>
            !property.rentWithin ? (
              <Schedular
                key={property._id}
                propertyName={property.propertyName}
                propertyNumber=""
                dates={dates}
                scheduleData={
                  scheduleData?.[bookingDates.find((s) => s === property._id)!]
                }
              />
            ) : (
              property.rooms.map((room) => (
                <Schedular
                  key={room._id}
                  propertyName={property.propertyName}
                  propertyNumber={room.roomName}
                  dates={dates}
                  scheduleData={
                    scheduleData?.[bookingDates.find((s) => s === room._id)!]
                  }
                />
              ))
            )
          )}
        </Flex>
      )}

      <BookingDetailsModal />
    </Box>
  );
};

export default ScheduleContainer;
