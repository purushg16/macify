import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useAdminUpcomingCheckIns } from "../../../hooks/useDashboard";
import CurrentHostingCard from "./CurrentHostingCard";

const UpcomingCheckInGrid = () => {
  const { data, isLoading } = useAdminUpcomingCheckIns();

  if (isLoading) <Spinner />;
  return (
    <Box mt={4}>
      <Heading fontSize="xl"> Upcoming Check-Ins </Heading>

      <SimpleGrid columns={1} mt={4} spacing={4}>
        {data?.data.map((hosting) => (
          <CurrentHostingCard data={hosting} key={hosting._id} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default UpcomingCheckInGrid;
