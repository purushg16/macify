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

const CurrentHostingCard = ({ data }: { data: CurrentHosting }) => {
  return (
    <Flex
      borderRadius={10}
      p={4}
      gap={4}
      bg="gray.50"
      justifyContent="space-between"
      h="max-content"
      align="center"
    >
      <Box>
        <HStack gap={2} align="baseline" mb={2}>
          <Heading fontSize="lg"> {data.property.propertyName} </Heading>
          <Text fontSize="sm" color="gray">
            Guests:3
          </Text>
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
        border="1px solid"
        borderColor="gray"
      >
        <Icon as={FaLocationArrow} />
      </Button>
    </Flex>
  );
};

export default CurrentHostingCard;
