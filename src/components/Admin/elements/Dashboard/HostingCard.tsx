import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FaLocationArrow } from "react-icons/fa";
import CurrentHosting from "../../../entities/CurrentHosting";
import DateFormatter from "../../../functions/dateFormatter";
import { useNavigate } from "react-router-dom";

const HostingCard = ({ data }: { data: CurrentHosting; color: string }) => {
  const navigate = useNavigate();

  return (
    <Flex
      borderRadius={10}
      p="20px"
      gap={4}
      bg={"white"}
      justifyContent="space-between"
      h="max-content"
      align="start"
    >
      <Flex gap={4} flexDir="column">
        <Box>
          <Heading fontSize="lg"> {data.property.propertyName} </Heading>
          <Text fontSize="sm">Guests: {data.guests.length}</Text>
        </Box>

        <HStack gap={2} align="baseline">
          <Flex
            align="center"
            bg="#E4FEE4"
            p={2}
            px={4}
            borderRadius={99}
            fontSize="xs"
            color="#01c801"
          >
            <Flex gap={2} bg="#01c801" borderRadius="100%" p={1} mr={2} />
            {DateFormatter(new Date(data.checkIn))}
          </Flex>
          <Flex
            align="center"
            bg="#F5B7B7"
            p={2}
            px={4}
            borderRadius={99}
            fontSize="xs"
            color="#DF1E1E"
          >
            <Flex gap={2} bg="#DF1E1E" borderRadius="100%" p={1} mr={2} />
            {DateFormatter(new Date(data.checkOut))}
          </Flex>
        </HStack>
      </Flex>
      <Button
        px={{ base: 4, md: 8 }}
        py={{ base: 2, md: 4 }}
        h="100%"
        aspectRatio="1/1"
        bg="green.100"
        _hover={{ bg: "green.200" }}
        onClick={() => navigate("editBooking/" + data._id)}
      >
        <Icon as={FaLocationArrow} />
      </Button>
    </Flex>
  );
};

export default HostingCard;
