import { SimpleGrid } from "@chakra-ui/react";
import { IconType } from "react-icons";
import AmenityCard from "./AmenityCard";
import { TiWeatherSnow } from "react-icons/ti";
import { FaParking, FaSwimmingPool } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { GiFireBomb, GiForkKnifeSpoon } from "react-icons/gi";
import { GiWashingMachine } from "react-icons/gi";
import { FaDumpsterFire } from "react-icons/fa";
import { MdOutlineCellWifi } from "react-icons/md";

const amenities: { [key: string]: IconType } = {
  "Air Conditioner": TiWeatherSnow,
  Parking: FaParking,
  "Pets Allowed": MdPets,
  Essentials: GiForkKnifeSpoon,
  "Kitchen Stove": FaDumpsterFire,
  "Washing Machine": GiWashingMachine,
  Internet: MdOutlineCellWifi,
  "General Heating": GiFireBomb,
  "Swimming Pool": FaSwimmingPool,
};

const AmenitiesGrid = () => {
  return (
    <SimpleGrid columns={3} spacing={4}>
      {Object.keys(amenities).map((amenity, i) => (
        <AmenityCard key={i} icon={amenities[amenity]} title={amenity} />
      ))}
    </SimpleGrid>
  );
};

export default AmenitiesGrid;
