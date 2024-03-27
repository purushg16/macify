import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useAdminUpcomingCheckIns } from "../../../hooks/useDashboard";
import HostingCard from "./HostingCard";
import AnimateMove from "../../../motions/Move";
import { useGetManagerUpcomingCheckIns } from "../../../hooks/useManagerAuth";

const UpcomingCheckInGrid = ({ manager = false }: { manager?: boolean }) => {
  const { data, isLoading } = useAdminUpcomingCheckIns(!manager);
  const { data: mData, isLoading: isMLoading } =
    useGetManagerUpcomingCheckIns(manager);

  if (isLoading || isMLoading) return <Spinner />;
  return (
    <Box mt={4}>
      <Heading fontSize="xl"> Upcoming Check-Ins </Heading>

      {data?.data.length === 0 ? (
        <Text fontSize="sm"> No upcoming check-ins, boss! </Text>
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

export default UpcomingCheckInGrid;
