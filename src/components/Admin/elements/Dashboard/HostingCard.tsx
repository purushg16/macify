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

const HostingCard = ({
  data,
  color = "green",
}: {
  data: CurrentHosting;
  color: string;
}) => {
  return (
    <Flex
      borderRadius={10}
      p={4}
      gap={4}
      bg={`${color}.100`}
      border="1px solid"
      borderColor={`${color}.300`}
      justifyContent="space-between"
      h="max-content"
      align="center"
    >
      <Box>
        <HStack gap={2} align="baseline" mb={2}>
          <Heading fontSize="lg"> {data.property.propertyName} </Heading>
          <Text fontSize="sm">Guests: {data.guests.length}</Text>
        </HStack>

        <HStack gap={2} align="baseline">
          <Flex
            align="center"
            bg="#f6f6f6"
            p={2}
            borderRadius={10}
            fontSize="xs"
          >
            <Flex
              gap={2}
              bg="green.100"
              borderRadius={10}
              p={2}
              mr={2}
              border="1px solid"
              borderColor="green"
            />
            {DateFormatter(new Date(data.checkIn))}
          </Flex>
          <Flex
            align="center"
            bg="#f6f6f6"
            p={2}
            borderRadius={10}
            fontSize="xs"
          >
            <Flex
              gap={2}
              bg="red.100"
              borderRadius={10}
              p={2}
              mr={2}
              border="1px solid"
              borderColor="red"
            />
            {DateFormatter(new Date(data.checkOut))}
          </Flex>
        </HStack>
      </Box>
      <Button
        px={{ base: 4, md: 8 }}
        py={{ base: 2, md: 4 }}
        h="100%"
        aspectRatio="1/1"
        bg="white"
        _hover={{ bg: "#f6f6f6" }}
      >
        <Icon as={FaLocationArrow} />
      </Button>
    </Flex>
  );
};

export default HostingCard;
