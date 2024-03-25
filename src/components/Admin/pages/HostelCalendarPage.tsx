import { Grid, GridItem, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import propertyResponses from "../../data/propertyResponses";
import PropertyRespone from "../../entities/PropertyResponse";
import { PropertyRoom } from "../../entities/property";
import { useGetAllProperties } from "../../hooks/usePropertyServices";
import AnimateMove from "../../motions/Move";
import PropertySelector from "../elements/PropertySelector";
import RoomSelector from "../elements/RoomSelector";
import SingleCalendarButtonStack from "../elements/SingleCalendar/SingleCalendarButtonStack";
import SingleDatePicker from "../elements/HostelCalendar/HostelDatePicker";
import { useGetBedBooking } from "../../hooks/useAdmin";

const HostelCalendarPage = () => {
  const {
    // data: properties,
    isLoading: isPropertiesLoading,
  } = useGetAllProperties();

  const [title, setTitle] = useState<string>("Property");
  const [property, setProperty] = useState<PropertyRespone>();
  const [room, setRoom] = useState<PropertyRoom>();
  const [date, setDate] = useState<Date | undefined>(undefined);

  const { refetch, isLoading, isRefetching } = useGetBedBooking(
    { roomId: room?._id, checkIn: date },
    !!date
  );

  const onPropertySelect = (id: string) => {
    const selectedProperty = propertyResponses.find(
      (property) => property._id === id
    );
    setProperty(selectedProperty);
    setTitle("Room");
    setRoom(undefined);
  };

  const onRoomSelect = (id: string) => {
    setTitle("Date");
    setRoom(property?.rooms.find((room) => room._id === id));
  };

  const onDateSelect = (date: Date | undefined) => {
    setDate(date);
    if (room && room._id) refetch();
  };

  return (
    <Grid gap={8}>
      <GridItem>
        <AnimateMove>
          <SingleCalendarButtonStack
            title={title}
            PropertySelector={
              isPropertiesLoading ? (
                <Spinner />
              ) : (
                <PropertySelector
                  onSelect={onPropertySelect}
                  properties={propertyResponses.filter(
                    (p) => p.propertyType === "hostel"
                  )}
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

      <GridItem>{(isLoading || isRefetching) && <Spinner />}</GridItem>
    </Grid>
  );
};

export default HostelCalendarPage;
