import { Text, VStack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AdminLinkStack = () => {
  return (
    <Box px={{ base: 4, md: 8, lg: 16 }}>
      <VStack align="start" gap={4}>
        <Link to="">
          <Text fontSize="xl"> Dashoboard </Text>
        </Link>
        <Link to="">
          <Text fontSize="xl"> Calendar </Text>
        </Link>
        <Link to="">
          <Text fontSize="xl"> Properties </Text>
        </Link>
        <Link to="">
          <Text fontSize="xl"> Account </Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default AdminLinkStack;
