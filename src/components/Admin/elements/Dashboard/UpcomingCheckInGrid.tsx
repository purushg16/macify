import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useAdminUpcomingCheckIns } from "../../../hooks/useDashboard";
import HostingCard from "./HostingCard";
import AnimateMove from "../../../motions/Move";

const UpcomingCheckInGrid = () => {
  const { data, isLoading } = useAdminUpcomingCheckIns();

  if (isLoading) <Spinner />;
  return (
    <Box mt={4}>
      <Heading fontSize="xl"> Upcoming Check-Ins </Heading>

      {data?.data.length === 0 ? (
        <Text> No hostings today, boss! </Text>
      ) : (
        <SimpleGrid columns={1} mt={4} spacing={4}>
          {data?.data.map((hosting, i) => (
            <AnimateMove delay={0.2 * (i + 1)}>
              <HostingCard data={hosting} key={hosting._id} color="green" />
            </AnimateMove>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default UpcomingCheckInGrid;
