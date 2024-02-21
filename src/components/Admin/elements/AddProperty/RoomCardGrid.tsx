import { SimpleGrid } from "@chakra-ui/react";
import RoomCard from "./RoomCard";

const RoomCardGrid = () => {
  return (
    <SimpleGrid
      columns={{ base: 2, md: 3 }}
      gap={4}
      bg="#f6f6f6"
      p={5}
      borderRadius={20}
      maxH={300}
      overflowY="auto"
    >
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
    </SimpleGrid>
  );
};

export default RoomCardGrid;
