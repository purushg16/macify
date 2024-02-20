import {
  Box,
  Flex,
  Heading,
  Highlight,
  Show,
  SimpleGrid,
} from "@chakra-ui/react";
import { TbBuilding, TbCalendar, TbLayoutBoard } from "react-icons/tb";
import TabCard from "../../elements/TabCard";

const DashBoardPage = () => {
  return (
    <Flex flexDir="column" p={8} gap={8} w="100%">
      <Heading>
        Hello,{" "}
        <Highlight query="Dayalan S" styles={{ color: "primary.500" }}>
          Dayalan S
        </Highlight>
      </Heading>

      <SimpleGrid
        spacing={{ base: 4, md: 4 }}
        columns={{ base: 2, md: 2, lg: 4 }}
      >
        <TabCard title="Dashboard" icon={TbLayoutBoard} active />
        <TabCard title="Calender" icon={TbCalendar} />
        <TabCard title="Property" icon={TbBuilding} />
        <TabCard title="Caretaker" icon={TbLayoutBoard} />
      </SimpleGrid>

      <Flex gap={4}>
        <Box flex={1} py={4}>
          <Heading> Lorem, ipsum dolor. </Heading>
        </Box>

        <Show above="lg">
          <SimpleGrid spacing={{ base: 4, md: 4 }} w={200}>
            <TabCard title="Dashboard" icon={TbLayoutBoard} active />
            <TabCard title="Calender" icon={TbCalendar} />
            <TabCard title="Property" icon={TbBuilding} />
            <TabCard title="Caretaker" icon={TbLayoutBoard} />
          </SimpleGrid>
        </Show>
      </Flex>
    </Flex>
  );
};

export default DashBoardPage;
