import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useAdminUpcomingCheckOuts } from "../../../hooks/useDashboard";
import HostingCard from "./HostingCard";

const UpcomingCheckOutGrid = () => {
  const { data, isLoading } = useAdminUpcomingCheckOuts();

  if (isLoading) <Spinner />;
  return (
    <Box mt={4}>
      <Heading fontSize="xl"> Upcoming Check-Outs </Heading>

      <SimpleGrid columns={1} mt={4} spacing={4}>
        {data?.data.map((hosting) => (
          <HostingCard data={hosting} key={hosting._id} color="red" />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default UpcomingCheckOutGrid;
