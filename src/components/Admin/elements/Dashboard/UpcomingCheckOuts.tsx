import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useAdminUpcomingCheckOuts } from "../../../hooks/useDashboard";
import HostingCard from "./HostingCard";
import AnimateMove from "../../../motions/Move";
import { useGetManagerUpcomingCheckOuts } from "../../../hooks/useManagerAuth";

const UpcomingCheckOutGrid = ({ manager = false }: { manager?: boolean }) => {
  const { data, isLoading } = useAdminUpcomingCheckOuts(!manager);
  const { data: mData, isLoading: isMLoading } =
    useGetManagerUpcomingCheckOuts(manager);

  if (isLoading || isMLoading) return <Spinner />;
  return (
    <Box mt={4}>
      <Heading fontSize="xl"> Upcoming Check-Outs </Heading>

      {data?.data.length === 0 ? (
        <Text fontSize="sm"> No upcoming check-outs, boss! </Text>
      ) : (
        <SimpleGrid columns={1} mt={4} spacing={4}>
          {!manager &&
            data?.data.map((hosting, i) => (
              <AnimateMove delay={0.2 * (i + 1)}>
                <HostingCard data={hosting} key={hosting._id} color="green" />
              </AnimateMove>
            ))}

          {manager &&
            mData?.data.map((hosting, i) => (
              <AnimateMove delay={0.2 * (i + 1)}>
                <HostingCard data={hosting} key={hosting._id} color="green" />
              </AnimateMove>
            ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default UpcomingCheckOutGrid;
