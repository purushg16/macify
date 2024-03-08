// import bookings from "../../data/bookings";
// import SingleCalendar from "../elements/SingleCalendar/SingleCalendar";

// import { Flex, Grid, GridItem, Input, Stack } from "@chakra-ui/react";
// import PropertySelector from "../elements/PropertySelector";
// import { useState } from "react";
// import properties from "../../data/properties";
// import Property, { PropertyBed, PropertyRoom } from "../../entities/property";
// import RoomSelector from "../elements/RoomSelector";
// import BedSelector from "../elements/BedSelector";

export const SingleCalendarPage = () => {
  // const [property, setProperty] = useState<Property>();
  // const [room, setRoom] = useState<PropertyRoom>();
  // const [bed, setBed] = useState<PropertyBed>();

  // const onPropertySelect = (id: string) => {
  //   setProperty(properties.find((property) => property._id === id));
  // };

  // const onRoomSelect = (id: string) => {
  //   const selectedRoom = property?.rooms.find((room) => room._id === id);
  //   setRoom(selectedRoom);
  // };

  // const onBedSelect = (id: string) => {
  //   const selectedBed = room?.beds?.find((bed) => bed._id === id);
  //   setBed(selectedBed);
  // };

  return (
    <>Single Calendar Page</>
    // <Grid>
    //   <Stack gap={4}>
    //     <Flex gap={2}>
    //       <Input
    //         bg="gray.50"
    //         value={property?.propertyName || "Select Propery"}
    //         isDisabled
    //       />
    //       <PropertySelector onSelect={onPropertySelect} />
    //     </Flex>

    //     {property && !property.rentWithin && (
    //       <>
    //         <Flex gap={2}>
    //           <Input
    //             bg="gray.50"
    //             value={room?.roomName || "Select Room"}
    //             isDisabled
    //           />
    //           <RoomSelector onSelect={onRoomSelect} />
    //         </Flex>

    //         {property.propertyType === "hostel" && (
    //           <Flex gap={2}>
    //             <Input
    //               bg="gray.50"
    //               value={bed?.bedNo || "Select Bed"}
    //               isDisabled
    //             />
    //             <BedSelector onSelect={onBedSelect} />
    //           </Flex>
    //         )}
    //       </>
    //     )}
    //   </Stack>
    //   <GridItem></GridItem>
    // </Grid>
  );
};
