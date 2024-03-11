import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import Title from "../elements/Title";
import ManagerCard from "../elements/manager/ManagerCard";
import AnimateMove from "../../motions/Move";
import { useGetAllManagers } from "../../hooks/useAdmin";

const ManagerPage = () => {
  const { data } = useGetAllManagers();

  return (
    <Box>
      <Title
        heading="Manager"
        subtitle="Add, review, and edit managers here"
        align="left"
      />

      <Box
        my={4}
        borderRadius={10}
        bg="#f6f6f6"
        p={4}
        maxH={500}
        overflowY="auto"
        sx={{
          "&::-webkit-scrollbar": {
            width: "0.1em", // Adjust the width as needed
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#e2e2e2", // Customize the scrollbar thumb color
          },
        }}
      >
        {!data && <Spinner />}
        {data && (
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            {data.data.map((manager, i) => (
              <AnimateMove delay={0.2 * (i + 1)}>
                <ManagerCard key={manager.name} manager={manager} />
              </AnimateMove>
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
};

export default ManagerPage;
