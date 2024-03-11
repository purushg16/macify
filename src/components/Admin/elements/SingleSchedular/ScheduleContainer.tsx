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
      ids: ["65d77f3f441ad240998b4b7b", "65d958be2a773c387290a00e"],
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

  console.log(Object.keys(scheduleData));
  console.log(properties?.data.map((room) => room.rooms.map((r) => r._id)));

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
      <Flex pt={3}>
        {dates.map((date, i) => (
          <DateBlock key={i} currentDate={date} />
        ))}
      </Flex>

      {/* Rendering List of Properties Schedules */}
      <Flex flexDir="column" gap={{ base: 4, md: 4, lg: 8 }}>
        {properties?.data.map((property) =>
          !property.rentWithin ? (
            <Schedular
              propertyName={property.propertyName}
              propertyNumber=""
              dates={dates}
              scheduleData={
                scheduleData[
                  Object.keys(scheduleData).find((s) => s === property.id)
                ]
              }
            />
          ) : (
            property.rooms.map((room) => (
              <Schedular
                propertyName={property.propertyName}
                propertyNumber={room.roomName}
                dates={dates}
                scheduleData={
                  scheduleData?.[
                    Object.keys(scheduleData!)?.find((r) => r === room._id)
                  ]
                }
              />
            ))
          )
        )}
      </Flex>

      {/* <Flex flexDir="column" gap={{ base: 4, md: 4, lg: 8 }}>
        {Object.values(scheduleData!).map((schedule) => (
          <Schedular
            propertyName="Ganga"
            propertyNumber="8"
            dates={dates}
            scheduleData={schedule}
          />
        ))}
      </Flex> */}
      <BookingDetailsModal />
    </Box>
  );
};

export default ScheduleContainer;
