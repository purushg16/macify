import {
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { BsClockFill, BsPeopleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const NotificationCard = () => {
  const navigate = useNavigate();

  return (
    <Flex
      justify="space-between"
      p={4}
      bg="primary.50"
      borderRadius={10}
      align="center"
      cursor="pointer"
      _hover={{ bg: "primary.100" }}
      transition="all 0.7s"
      onClick={() => navigate("/admin/approveBooking")}
    >
      <Box>
        <Heading fontSize="xl"> Sunny's Villa </Heading>
        <HStack mt={2} gap={4}>
          <GridItem>
            <Text display="flex" gap={2} alignItems="center">
              <Icon as={BsPeopleFill} /> 3
            </Text>
          </GridItem>
          <GridItem> | </GridItem>
          <GridItem>
            <Text display="flex" gap={2} alignItems="center">
              <Icon as={BsClockFill} /> Feb 29, 2024
            </Text>
          </GridItem>
        </HStack>
      </Box>
      <Button> Decline </Button>
    </Flex>
  );
};

export default NotificationCard;
