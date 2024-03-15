import { Grid, GridItem, Spinner } from "@chakra-ui/react";
import PropertySelector from "../elements/PropertySelector";
import { useState } from "react";
import { PropertyBed, PropertyRoom } from "../../entities/property";
import RoomSelector from "../elements/RoomSelector";
import BedSelector from "../elements/BedSelector";
import { useGetAllProperties } from "../../hooks/usePropertyServices";
import PropertyRespone from "../../entities/PropertyResponse";
import FetchDetailsButton from "../elements/SingleSchedular/FetchDetailsButton";
import { BookingTimelineInterface } from "../../api/admin-client";
import SingleCalendar from "../elements/SingleCalendar/SingleCalendar";
import SingleCalendarButtonStack from "../elements/SingleCalendar/SingleCalendarButtonStack";
import AnimateMove from "../../motions/Move";

export const SingleCalendarPage = () => {
  const { data: properties, isLoading: isPropertiesLoading } =
    useGetAllProperties();

  const [property, setProperty] = useState<PropertyRespone>();
  const [room, setRoom] = useState<PropertyRoom>();
  const [bed, setBed] = useState<PropertyBed>();
  const [finalField, setFinalField] = useState("");

  const onPropertySelect = (id: string) => {
    const selectedProperty = properties?.data.find(
      (property) => property._id === id
    );
    setProperty(selectedProperty);
    setRoom(undefined);

    if (!selectedProperty?.rentWithin) setFinalField(id);
    else setFinalField("");
  };

  const onRoomSelect = (id: string) => {
    const selectedRoom = property?.rooms.find((room) => room._id === id);
    setRoom(selectedRoom);
    setBed(undefined);

    if (property?.propertyType !== "hostel") setFinalField(id);
    else setFinalField("");
  };

  const onBedSelect = (id: string) => {
    const selectedBed = room?.beds?.find((bed) => bed._id === id);
    setBed(selectedBed);

    setFinalField(id);
  };

  const [booking, setBooking] = useState<
    BookingTimelineInterface | undefined
  >();
  const afterDataFetched = (b: BookingTimelineInterface | undefined) =>
    setBooking(b);

  return (
    <Grid gap={8}>
      <GridItem>
        <AnimateMove>
          <SingleCalendarButtonStack
            fetchButton={
              <FetchDetailsButton
                ids={[finalField]}
                disabled={!finalField}
                callback={afterDataFetched}
              />
            }
            PropertySelector={
              isPropertiesLoading ? (
                <Spinner />
              ) : (
                <PropertySelector
                  onSelect={onPropertySelect}
                  properties={properties?.data}
                  selectedProperty={property}
                />
              )
            }
            RoomSelector={
              property &&
              property.rentWithin && (
                <RoomSelector
                  onSelect={onRoomSelect}
                  rooms={property.rooms}
                  selectedRoom={room}
                />
              )
            }
            BedSelector={
              room &&
              property &&
              property.propertyType === "hostel" && (
                <BedSelector
                  onSelect={onBedSelect}
                  beds={room.beds}
                  selectedBed={bed}
                />
              )
            }
          />
        </AnimateMove>
      </GridItem>

      <GridItem>
        {booking && (
          <AnimateMove>
            <SingleCalendar bookings={Object.values(booking)[0]} />
          </AnimateMove>
        )}
      </GridItem>
    </Grid>
  );
};
