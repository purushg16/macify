import { Box, VStack } from "@chakra-ui/react";
import managers from "../../../data/managers";
import ManagerConfirmationModal from "./ManagerConfirmationModal";

const ManagersList = () => {
  return (
    <Box maxH={250} overflowY="auto" p={4} bg="white" borderRadius={20}>
      <VStack gap={4}>
        {managers.map((manager, i) => (
          <ManagerConfirmationModal key={i} manager={manager} />
        ))}
      </VStack>
    </Box>
  );
};

export default ManagersList;
