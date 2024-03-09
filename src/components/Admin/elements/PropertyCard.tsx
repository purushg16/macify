import { Box, Flex, SimpleGrid, Heading, Button, Text } from "@chakra-ui/react";
import Title from "./Title";
import PropertyRespone from "../../entities/PropertyResponse";

const PropertyCard = ({ property }: { property: PropertyRespone }) => {
  return (
    <Flex
      gap={4}
      flexDir="column"
      bg="#f6f6f6"
      p={8}
      px={4}
      borderRadius={10}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;"
    >
      <Box>
        <Title heading={property.propertyName} subtitle="" align="left" />
      </Box>
      <SimpleGrid columns={2} gap={4}>
        <Box p={4} bg="gray.50" borderRadius={10}>
          <Text color="gray" fontSize="sm">
            Type
          </Text>
          <Heading fontSize="xl" textTransform="capitalize">
            {property.propertyType}
          </Heading>
        </Box>
        <Box p={4} bg="gray.50" borderRadius={10}>
          <Text color="gray" fontSize="sm">
            Rooms
          </Text>
          <Heading fontSize="xl"> {property.rooms.length} </Heading>
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={2} gap={4} mt={4}>
        <Button> Delete </Button>
        <Button colorScheme="primary">Edit Details</Button>
      </SimpleGrid>
    </Flex>
  );
};

export default PropertyCard;
