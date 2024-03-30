import { Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import PropertyRespone from "../../entities/PropertyResponse";
import { PropertyRoom } from "../../entities/property";
import { useGetAllProperties } from "../../hooks/usePropertyServices";
import AnimateMove from "../../motions/Move";
import PropertySelector from "../elements/PropertySelector";
import RoomSelector from "../elements/RoomSelector";
import SingleCalendarButtonStack from "../elements/SingleCalendar/SingleCalendarButtonStack";
import SingleDatePicker from "../elements/HostelCalendar/HostelDatePicker";
import { useGetBedBooking } from "../../hooks/useAdmin";
import HostelBedGrid from "../elements/HostelCalendar/HostelBedGrid";
import LoadingIndicator from "../elements/LoadingIndicator";
import { useGetManagerProperties } from "../../hooks/useManagerAuth";
import formatDateToYYYYMMDD from "../../functions/dateToString";

const HostelCalendarPage = ({ manager = false }: { manager?: boolean }) => {
  const { data: properties, isLoading: isPropertiesLoading } =
    useGetAllProperties(!manager);
  const { data: mProperties, isLoading: isMPropertiesLoading } =
    useGetManagerProperties(manager);

  const [title, setTitle] = useState<string>("Property");
  const [property, setProperty] = useState<PropertyRespone>();
  const [room, setRoom] = useState<PropertyRoom>();
  const [date, setDate] = useState<Date | undefined>(undefined);

  const {
    data: bookings,
    refetch,
    isLoading: isBookingLoading,
  } = useGetBedBooking(
    { roomId: room?._id, checkIn: formatDateToYYYYMMDD(date) },
    !!date && !!room?._id
  );

  useEffect(() => {
    if (room && date) {
      refetch();
    }
  }, [room, date, refetch]);

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

  const onDateSelect = (date: Date | undefined) => {
    setDate(date);
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
                setDate={onDateSelect}
                isDisabled={!property || !room}
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
