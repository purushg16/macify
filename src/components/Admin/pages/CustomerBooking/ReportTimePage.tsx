import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";

const ReportTimePage = () => {
  return (
    <>
      <VStack gap={4}>
        <Box textAlign="left">
          <Text fontSize="md" mb={2}>
            Check In Time
          </Text>
          <InputGroup>
            <Input bg="gray.50" />
            <InputRightElement>
              <Icon as={BsClock} />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box textAlign="left">
          <Text fontSize="md" mb={2}>
            Check In Time
          </Text>
          <InputGroup>
            <Input bg="gray.50" />
            <InputRightElement>
              <Icon as={BsClock} />
            </InputRightElement>
          </InputGroup>
        </Box>
      </VStack>
      <HStack>
        <Link to="/booking/4">
          <Button> Back </Button>
        </Link>
        <Link to="/booking/6">
          <Button colorScheme="primary"> Continue </Button>
        </Link>
      </HStack>
    </>
  );
};

export default ReportTimePage;
