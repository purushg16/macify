import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import HostingCard from "./HostingCard";
import { useAdminCurrentHosting } from "../../../hooks/useDashboard";
import AnimateMove from "../../../motions/Move";
import { useGetManagerCurrentHostings } from "../../../hooks/useManagerAuth";
import LoadingIndicator from "../LoadingIndicator";

const CurrentHostingGrid = ({ manager = false }: { manager?: boolean }) => {
  const { data, isLoading } = useAdminCurrentHosting(!manager);
  const { data: managerData, isLoading: isMLoading } =
    useGetManagerCurrentHostings(manager);

  if (isLoading || isMLoading) return <LoadingIndicator text="hostings" />;
  return (
    <Box mt={4}>
      <Heading fontSize="xl"> Current Hosting </Heading>

      {data?.data.length === 0 ? (
        <Text fontSize="sm"> No hostings today, boss! </Text>
      ) : (
        <SimpleGrid columns={1} mt={4} spacing={4}>
          {!manager &&
            data?.data.map((hosting, i) => (
              <AnimateMove delay={0.2 * (i + 1)}>
                <HostingCard data={hosting} key={hosting._id} color="green" />
              </AnimateMove>
            ))}

          {manager &&
            managerData?.data.map((hosting, i) => (
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
