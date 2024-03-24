import { Box, Flex, Spinner } from "@chakra-ui/react";
import DateBlock from "./DateBlock";
import Schedular from "./Schedular";
import DateGenerator from "../../../functions/dateGenerator";
import { useGetAllBooking } from "../../../hooks/useAdmin";
import { useRef, useState } from "react";
import BookingDetailsModal from "./BookingDetailsModal";
import { useGetAllProperties } from "../../../hooks/usePropertyServices";

const ScheduleContainer = () => {
  const { data: properties } = useGetAllProperties();

  const { data: scheduleData, isLoading } = useGetAllBooking(
    {
      ids: properties?.data.map((p) => p._id),
    },
    !!properties
  );

  const [visibleMonth, setVisibleMonth] = useState(1);
  const boxRef = useRef<HTMLDivElement>(null);
  const dates = DateGenerator({ months: visibleMonth });

  const handleScroll = () => {
    const box = boxRef.current!;
    if (box.scrollLeft + box.clientWidth === box.scrollWidth)
      setVisibleMonth(visibleMonth + 1);
    else if (box.scrollLeft === 0) setVisibleMonth(1);
  };

  if (isLoading) return <Spinner />;
  if (!scheduleData) return null;
  if (!properties) return <Spinner />;

  const bookingDates = Object.keys(scheduleData);

  return (
    <Box
      ref={boxRef}
      onScroll={handleScroll}
      borderTop="1px solid #e2e2e2"
      w="100%"
      overflowX="auto"
      sx={{ "&::-webkit-scrollbar": { height: 0 } }}
    >
      {/* Redering Date Blocks */}
      <Box>
        <Flex pt={3}>
          {dates.map((date, i) => (
            <DateBlock key={i} currentDate={date} />
          ))}
        </Flex>
      </Box>

      {/* Rendering List of Properties Schedules */}
      <Flex flexDir="column" gap={{ base: 4, md: 4, lg: 8 }}>
        {properties?.data.map((property) =>
          !property.rentWithin ? (
            <Schedular
              key={property._id}
              propertyName={property.propertyName}
              propertyNumber=""
              dates={dates}
              scheduleData={
                scheduleData[bookingDates.find((s) => s === property._id)!]
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
                  scheduleData[bookingDates.find((s) => s === room._id)!]
                }
              />
            ))
          )
        )}
      </Flex>
      <BookingDetailsModal />
    </Box>
  );
};

export default ScheduleContainer;
