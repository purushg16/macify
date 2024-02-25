import { Box, SimpleGrid } from "@chakra-ui/react";
import Title from "../elements/Title";
import ManagerCard from "../elements/manager/ManagerCard";
import managers from "../../data/managers";

const ManagerPage = () => {
  return (
    <Box>
      <Title
        heading="Manager"
        subtitle="Add, review, and edit managers here"
        align="left"
      />

      <Box
        bg="#f6f6f6"
        p={4}
        my={4}
        borderRadius={20}
        maxH={500}
        overflowY="auto"
      >
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
          {managers.map((manager) => (
            <ManagerCard key={manager.name} manager={manager} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ManagerPage;
