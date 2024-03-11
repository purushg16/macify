import { Flex, Grid, GridItem, Input, Spinner, Stack } from "@chakra-ui/react";
import PropertySelector from "../elements/PropertySelector";
import { useState } from "react";
import { PropertyBed, PropertyRoom } from "../../entities/property";
import RoomSelector from "../elements/RoomSelector";
import BedSelector from "../elements/BedSelector";
import { useGetAllProperties } from "../../hooks/usePropertyServices";
import PropertyRespone from "../../entities/PropertyResponse";
import FetchDetailsButton from "../elements/SingleSchedular/FetchDetailsButton";

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

  return (
    <Grid>
      <GridItem>
        <Stack gap={4}>
          <Flex gap={2}>
            <Input
              bg="gray.50"
              value={property?.propertyName || "Select Propery"}
              isDisabled
              textTransform="capitalize"
            />
            {isPropertiesLoading ? (
              <Spinner />
            ) : (
              <PropertySelector
                onSelect={onPropertySelect}
                properties={properties?.data}
              />
            )}
          </Flex>

          {property && property.rentWithin && (
            <>
              <Flex gap={2}>
                <Input
                  bg="gray.50"
                  value={room?.roomName || "Select Room"}
                  isDisabled
                />
                <RoomSelector onSelect={onRoomSelect} rooms={property.rooms} />
              </Flex>

              {room && property.propertyType === "hostel" && (
                <Flex gap={2}>
                  <Input
                    bg="gray.50"
                    value={bed?.bedNo || "Select Bed"}
                    isDisabled
                  />
                  <BedSelector onSelect={onBedSelect} beds={room.beds} />
                </Flex>
              )}
            </>
          )}
        </Stack>

        <FetchDetailsButton ids={[finalField]} disabled={!finalField} />
      </GridItem>
      <GridItem></GridItem>
    </Grid>
  );
};
