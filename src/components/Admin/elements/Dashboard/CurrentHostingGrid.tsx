import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import HostingCard from "./HostingCard";
import { useAdminCurrentHosting } from "../../../hooks/useDashboard";
import AnimateMove from "../../../motions/Move";

const CurrentHostingGrid = () => {
  const { data, isLoading } = useAdminCurrentHosting();

  if (isLoading) <Spinner />;
  return (
    <Box mt={4}>
      <Heading fontSize="xl"> Current Hosting </Heading>

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

export default CurrentHostingGrid;
