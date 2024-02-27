import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DateSelectArg, EventContentArg } from "@fullcalendar/core/index.js";
import { Box } from "@chakra-ui/react";

const MyCalendar = () => {
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    // Handle date selection logic
    console.log(selectInfo);
  };

  const handleEventContent = (eventContent: EventContentArg) => {
    const checkinTime = new Date(eventContent.event.start!);
    const checkoutTime = new Date(eventContent.event.end!);

    return (
      <Box>
        <div
        //   style={{
        //     color: "white",
        //     borderRadius: "3px",
        //     padding: "2px",
        //     marginBottom: "2px",
        //   }}
        >
          {`${checkinTime.toLocaleTimeString()} - ${checkoutTime.toLocaleTimeString()}`}
        </div>
      </Box>
    );
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={[
        {
          title: "Event 1",
          start: "2024-02-04T20:00:00",
          end: "2024-02-05T02:00:00",
        },
      ]}
      select={handleDateSelect}
      eventContent={handleEventContent}
    />
  );
};

export default MyCalendar;