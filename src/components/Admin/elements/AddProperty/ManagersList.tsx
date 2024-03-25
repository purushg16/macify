import { Box, Spinner, VStack } from "@chakra-ui/react";
import ManagerConfirmationModal from "./ManagerConfirmationModal";
import { useGetAllManagers } from "../../../hooks/useAdmin";

const ManagersList = () => {
  const { data, isLoading } = useGetAllManagers();
  return (
    <Box maxH={250} overflowY="auto" p={4} bg="white" borderRadius={20}>
      {isLoading ? (
        <Spinner />
      ) : (
        <VStack gap={4}>
          {data?.data.map((manager, i) => (
            <ManagerConfirmationModal key={i} manager={manager} />
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default ManagersList;
