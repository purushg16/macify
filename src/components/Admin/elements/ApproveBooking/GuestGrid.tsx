import { SimpleGrid } from "@chakra-ui/react";
import GuestCard from "./GuestCard";
import Guest from "../../../entities/Guest";

interface Props {
  guests: Guest[];
}

const GuestGrid = ({ guests }: Props) => {
  return (
    <SimpleGrid
      columns={{ base: 2, md: 3, lg: 4 }}
      p={4}
      spacing={4}
      borderRadius={10}
      border="1px dashed"
      borderColor="gray.100"
    >
      {guests.map((guest, i) => (
        <GuestCard key={i} guest={guest} />
      ))}
    </SimpleGrid>
  );
};

export default GuestGrid;
