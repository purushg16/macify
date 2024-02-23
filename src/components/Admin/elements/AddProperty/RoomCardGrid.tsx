import { GridItem, SimpleGrid } from "@chakra-ui/react";
import RoomCard from "./RoomCard";

const RoomCardGrid = () => {
  return (
    <SimpleGrid
      mx="auto"
      w={{ base: "90%", md: "80%", lg: "70%" }}
      columns={{ base: 2, md: 3, lg: 3 }}
      spacingX={4}
      spacingY={4}
      bg="#f6f6f6"
      p={{ base: 6, md: 3, lg: 5 }}
      borderRadius={20}
      maxH={350}
      overflowY="auto"
    >
      <GridItem>
        <RoomCard />
      </GridItem>
      <GridItem>
        <RoomCard />
      </GridItem>
      <GridItem>
        <RoomCard />
      </GridItem>
      <GridItem>
        <RoomCard />
      </GridItem>
      <GridItem>
        <RoomCard />
      </GridItem>
      <GridItem>
        <RoomCard />
      </GridItem>
    </SimpleGrid>
  );
};

export default RoomCardGrid;
