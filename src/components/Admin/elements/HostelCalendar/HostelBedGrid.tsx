import { Box, SimpleGrid } from "@chakra-ui/react";
import HotelBedCard from "./HotelBedCard";
import { PropertyBed } from "../../../entities/property";
import Title from "../Title";
import { useState } from "react";
import unoccupiedImg from "../../../../assets/app/bed/empty_bed.jpeg";
import occupiedImg from "../../../../assets/app/bed/male_bed.jpeg";
import BedBooking from "../../../entities/BedBookings";
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
          const groupId = bookedBeds?.find((b) => b.bed === bed._id)?.group;
          const isSelectedGroup = groupId
            ? selectedGroupId === groupId
            : undefined;

          return (
            <HotelBedCard
              img={isOccupied ? occupiedImg : unoccupiedImg}
              key={bed._id}
              bed={bed}
              groupId={groupId}
              group={isSelectedGroup}
              defualt={!selectedGroupId}
              onClick={selectGroupId}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default HostelBedGrid;
