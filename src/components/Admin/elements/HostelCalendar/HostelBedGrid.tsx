import { Box, SimpleGrid } from "@chakra-ui/react";
import HotelBedCard from "./HotelBedCard";
import { PropertyBed } from "../../../entities/property";
import Title from "../Title";
import { useState } from "react";
import BedBooking from "../../../entities/BedBookings";
import maleBed from "../../../../assets/Bed/male-bed.png";
import femaleBed from "../../../../assets/Bed/female-bed.png";
import availableBed from "../../../../assets/Bed/available-bed.png";

const HostelBedGrid = ({
  beds,
  bookedBeds,
}: {
  beds: PropertyBed[];
  bookedBeds: BedBooking[];
}) => {
  const [selectedGroupId, selectGroupId] = useState<string | undefined>(
    undefined
  );

  const occupiedBedIds = new Set(bookedBeds?.map((b) => b.bed));

  return (
    <Box p={4} bg="#f4f4f4" borderRadius={20}>
      <Title
        heading="Beds"
        subtitle="avaiable in Room"
        size="md"
        substitleSize="xs"
        align="left"
      />

      <SimpleGrid
        spacing={4}
        columns={3}
        mt={2}
        pt={8}
        borderTop="1px solid"
        borderColor="gray.100"
      >
        {beds.map((bed) => {
          const isOccupied = occupiedBedIds?.has(bed._id);
          const bookedBed = bookedBeds?.find((b) => b.bed === bed._id);
          const isSelectedGroup = bookedBed
            ? selectedGroupId === bookedBed.group
            : undefined;

          return (
            <HotelBedCard
              image={
                isOccupied
                  ? bookedBed?.guests[0].gender !== null &&
                    bookedBed?.guests[0].gender === "male"
                    ? maleBed
                    : bookedBed?.guests[0].gender !== null &&
                      bookedBed?.guests[0].gender === "female"
                    ? femaleBed
                    : ""
                  : availableBed
              }
              isOccupied={isOccupied}
              key={bed._id}
              bed={bed}
              groupId={bookedBed?.group}
              group={isSelectedGroup}
              defualt={!selectedGroupId}
              onClick={selectGroupId}
              gender={
                bookedBed?.guests[0].gender !== null
                  ? bookedBed?.guests[0].gender
                  : undefined
              }
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default HostelBedGrid;
