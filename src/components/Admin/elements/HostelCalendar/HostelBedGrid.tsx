import { Box, SimpleGrid } from "@chakra-ui/react";
import HotelBedCard from "./HotelBedCard";
import { PropertyBed } from "../../../entities/property";
import Title from "../Title";
import { useState } from "react";
import img from "../../../../assets/app/bed/empty_bed.jpeg";
import img1 from "../../../../assets/app/bed/male_bed.jpeg";

const HostelBedGrid = ({ beds }: { beds: PropertyBed[] }) => {
  const images = [img, img1];

  const [selectedGroupId, selectGroupId] = useState<number | undefined>(
    undefined
  );
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
        {beds.map((bed, i) => (
          <HotelBedCard
            img={i % 2 == 0 ? images[0] : images[1]}
            key={bed._id}
            bed={bed}
            groupId={i + 1}
            group={selectedGroupId ? i % selectedGroupId == 0 : false}
            defualt={!selectedGroupId}
            onClick={selectGroupId}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HostelBedGrid;
