import { Grid, GridItem } from "@chakra-ui/react";
import PropertySelector from "../elements/PropertySelector";
import { useState } from "react";
import { PropertyBed, PropertyRoom } from "../../entities/property";
import RoomSelector from "../elements/RoomSelector";
import BedSelector from "../elements/BedSelector";
import { useGetAllProperties } from "../../hooks/usePropertyServices";
import PropertyRespone from "../../entities/PropertyResponse";
import SingleCalendar from "../elements/SingleCalendar/SingleCalendar";
import SingleCalendarButtonStack from "../elements/SingleCalendar/SingleCalendarButtonStack";
import AnimateMove from "../../motions/Move";
import { useGetAllBooking } from "../../hooks/useAdmin";
import { useGetManagerProperties } from "../../hooks/useManagerAuth";
import LoadingIndicator from "../elements/LoadingIndicator";

export const SingleCalendarPage = ({
  manager = false,
}: {
  manager?: boolean;
}) => {
  const { data: properties, isLoading: isPropertiesLoading } =
    useGetAllProperties(!manager);

  const { data: mProperties, isLoading: isMPropertiesLoading } =
    useGetManagerProperties(manager);

  const [title, setTitle] = useState<string>("Property");
  const [property, setProperty] = useState<PropertyRespone>();
  const [room, setRoom] = useState<PropertyRoom>();
  const [bed, setBed] = useState<PropertyBed>();
  const [finalField, setFinalField] = useState("");
  const { data, isLoading, isRefetching } = useGetAllBooking(
    { ids: [finalField] },
    !!finalField
  );

  const onPropertySelect = (id: string) => {
    const selectedProperty = manager
      ? mProperties?.data.find((property) => property._id === id)
      : properties?.data.find((property) => property._id === id);

    setProperty(selectedProperty);
    setRoom(undefined);

    if (!selectedProperty?.rentWithin) {
      setFinalField(id);
    } else {
      setFinalField("");
      setTitle("Room");
    }
  };

  const onRoomSelect = (id: string) => {
    const selectedRoom = property?.rooms.find((room) => room._id === id);
    setRoom(selectedRoom);
    setBed(undefined);

    if (property?.propertyType !== "hostel") {
      setFinalField(id);
    } else {
      setFinalField("");
      setTitle("Bed");
    }
  };

  const onBedSelect = (id: string) => {
    const selectedBed = room?.beds?.find((bed) => bed._id === id);
    setBed(selectedBed);
    setFinalField(id);
  };

  return (
    <Grid gap={8}>
      <GridItem>
        <AnimateMove>
          <SingleCalendarButtonStack
            title={title}
            PropertySelector={
              isPropertiesLoading || isMPropertiesLoading ? (
                <LoadingIndicator text="Properties" />
              ) : (
                <PropertySelector
                  onSelect={onPropertySelect}
                  properties={manager ? mProperties?.data : properties?.data}
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
      {isRefetching || isLoading ? (
        <LoadingIndicator text="Bookings" />
      ) : (
        <GridItem>
          {data && (
            <AnimateMove>
              <SingleCalendar bookings={Object.values(data)[0]} />
            </AnimateMove>
          )}
        </GridItem>
      )}
    </Grid>
  );
};
