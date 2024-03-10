import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import CurrentHostingCard from "./CurrentHostingCard";
import { useAdminCurrentHosting } from "../../../hooks/useDashboard";

const CurrentHostingGrid = () => {
  const { data, isLoading } = useAdminCurrentHosting();

  if (isLoading) <Spinner />;
  return (
    <Box mt={4}>
      <Heading fontSize="xl"> Current Hosting </Heading>

      <SimpleGrid columns={1} mt={4}>
        {data?.data.map((hosting) => (
          <CurrentHostingCard data={hosting} key={hosting._id} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CurrentHostingGrid;
