import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DateSelectArg, EventContentArg } from "@fullcalendar/core/index.js";
import { Box } from "@chakra-ui/react";
import { TimelineBookings } from "../../../api/admin-client";

interface Props {
  bookings: TimelineBookings;
}

const SingleCalendar = ({ bookings }: Props) => {
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    // Handle date selection logic
    alert(`${selectInfo}`);
  };

  const handleEventContent = (eventContent: EventContentArg) => {
    const checkinTime = new Date(eventContent.event.start!);
    const checkoutTime = new Date(eventContent.event.end!);

    return (
      <Box>
        <div
        // style={{
        //   color: "white",
        //   borderRadius: "3px",
        //   padding: "2px",
        //   marginBottom: "2px",
        // }}
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
      events={Object.values(bookings).map((booking) => {
        return {
          title: booking.property,
          start: new Date(booking.checkIn).toISOString(),
          end: new Date(booking.checkOut).toISOString(),
        };
      })}
      select={handleDateSelect}
      eventContent={handleEventContent}
      eventClick={(arg) => alert(arg.event._def.title)}
    />
  );
};

export default SingleCalendar;
