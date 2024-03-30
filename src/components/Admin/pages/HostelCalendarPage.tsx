import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PropertyRespone from "../../entities/PropertyResponse";
import { PropertyRoom } from "../../entities/property";
import formatDateToYYYYMMDD from "../../functions/dateToString";
import { useGetBedBooking } from "../../hooks/useAdmin";
import { useGetManagerProperties } from "../../hooks/useManagerAuth";
import { useGetAllProperties } from "../../hooks/usePropertyServices";
import AnimateMove from "../../motions/Move";
import HostelBedGrid from "../elements/HostelCalendar/HostelBedGrid";
import SingleDatePicker from "../elements/HostelCalendar/HostelDatePicker";
import LoadingIndicator from "../elements/LoadingIndicator";
import PropertySelector from "../elements/PropertySelector";
import RoomSelector from "../elements/RoomSelector";
import SingleCalendarButtonStack from "../elements/SingleCalendar/SingleCalendarButtonStack";

const HostelCalendarPage = ({ manager = false }: { manager?: boolean }) => {
  const { data: properties, isLoading: isPropertiesLoading } =
    useGetAllProperties(!manager);
  const { data: mProperties, isLoading: isMPropertiesLoading } =
    useGetManagerProperties(manager);

  const [title, setTitle] = useState<string>("Property");
  const [property, setProperty] = useState<PropertyRespone>();
  const [room, setRoom] = useState<PropertyRoom>();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [shift, setShift] = useState<"before" | "after" | undefined>(undefined);

  const {
    data: bookings,
    refetch,
    isLoading: isBookingLoading,
  } = useGetBedBooking(
    {
      roomId: room?._id,
      checkIn: formatDateToYYYYMMDD(date!),
      propertyId: property?._id,
      shift: shift,
    },
    !!date && !!room?._id
  );

  useEffect(() => {
    if (room && date && shift) {
      refetch();
    }
  }, [room, date, shift, refetch]);

  const onPropertySelect = (id: string) => {
    const selectedProperty = manager
      ? mProperties?.data.find((property) => property._id === id)
      : properties?.data.find((property) => property._id === id);

    if (property !== selectedProperty) {
      setRoom(undefined);
      setTitle("Room");
    }
    setProperty(selectedProperty);
  };

  const onRoomSelect = (id: string) => {
    setTitle("Date");
    setRoom(property?.rooms.find((room) => room._id === id));
  };

  return (
    <Grid gap={8}>
      <GridItem>
        <AnimateMove>
          <SingleCalendarButtonStack
            title={title}
            same
            PropertySelector={
              isPropertiesLoading || isMPropertiesLoading ? (
                <LoadingIndicator text="Properties" />
              ) : (
                <PropertySelector
                  onSelect={onPropertySelect}
                  properties={
                    manager
                      ? mProperties?.data.filter(
                          (p) => p.propertyType === "hostel"
                        )
                      : properties?.data.filter(
                          (p) => p.propertyType === "hostel"
                        )
                  }
                  selectedProperty={property}
                />
              )
            }
            RoomSelector={
              property && (
                <RoomSelector
                  onSelect={onRoomSelect}
                  rooms={property.rooms}
                  selectedRoom={room}
                />
              )
            }
            DatePicker={
              <SingleDatePicker
                date={date}
                setDate={setDate}
                time={property?.checkIn}
                isDisabled={!property || !room}
                shift={shift}
                setShift={setShift}
              />
            }
          />
        </AnimateMove>
      </GridItem>

      <GridItem>
        {properties &&
          room?.beds &&
          (isBookingLoading || isPropertiesLoading) && (
            <LoadingIndicator text="Bookings" />
          )}
        {room && room.beds && (
          <HostelBedGrid beds={room?.beds} bookedBeds={bookings!} />
        )}
      </GridItem>
    </Grid>
  );
};

export default HostelCalendarPage;
