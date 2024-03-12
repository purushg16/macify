import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import HostingCard from "./HostingCard";
import { useAdminCurrentHosting } from "../../../hooks/useDashboard";

const CurrentHostingGrid = () => {
  const { data, isLoading } = useAdminCurrentHosting();

  if (isLoading) <Spinner />;
  return (
    <Box mt={4}>
      <Heading fontSize="xl"> Current Hosting </Heading>

      <SimpleGrid columns={1} mt={4} spacing={4}>
        {data?.data.map((hosting) => (
          <HostingCard data={hosting} key={hosting._id} color="green" />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CurrentHostingGrid;
