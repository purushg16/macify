import { Box, SimpleGrid } from "@chakra-ui/react";
import { IconType } from "react-icons";
import AmenityCard from "./AmenityCard";
import { TiWeatherSnow } from "react-icons/ti";
import { FaParking, FaSwimmingPool } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { GiFireBomb, GiForkKnifeSpoon } from "react-icons/gi";
import { GiWashingMachine } from "react-icons/gi";
import { FaDumpsterFire } from "react-icons/fa";
import { MdOutlineCellWifi } from "react-icons/md";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";

const amenities: { [key: string]: IconType } = {
  "Air conditioning": TiWeatherSnow,
  Parking: FaParking,
  "Pets allowed": MdPets,
  Essentials: GiForkKnifeSpoon,
  "Kitchen stove": FaDumpsterFire,
  "Washing machine": GiWashingMachine,
  Internet: MdOutlineCellWifi,
  "General Heating": GiFireBomb,
  "Swimming Pool": FaSwimmingPool,
};

const AmenitiesGrid = () => {
  const amenitiesList = useAddPropertyStore((s) => s.amenities);
  const addAmenity = useAddPropertyStore((s) => s.setAmenities);

  return (
    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
      {Object.keys(amenities).map((amenity, i) => (
        <Box key={i} onClick={() => addAmenity(amenity)}>
          <AmenityCard
            icon={amenities[amenity]}
            title={amenity}
            selected={amenitiesList?.includes(amenity)}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default AmenitiesGrid;
