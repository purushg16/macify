import { useParams } from "react-router-dom";
import { useGetSingleProperty } from "../../hooks/usePropertyServices";
import { Box, Flex, GridItem, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";
import { BiBuilding, BiGlobe } from "react-icons/bi";
import { IoClose, IoLocation } from "react-icons/io5";
import { MdLinearScale } from "react-icons/md";

const EditPropertyPage = () => {
  const id = useParams().id;
  const { data: property } = useGetSingleProperty(id!, !!id);

  return (
    <Flex
      gap={8}
      flexDir="column"
      border="1px solid"
      borderColor="gray.100"
      bg="#f6f6f6"
      borderRadius={10}
      p={2}
    >
      <GridItem>
        <SimpleGrid
          columns={1}
          spacing={4}
          p={4}
          border="1px dashed"
          borderColor="gray.100"
          borderRadius={10}
        >
          <Box w="max-content">
            <Text mb={2} fontSize="sm" color="gray">
              Property Name
            </Text>
            <Box p={2} px={8} borderRadius={10} bg="white" fontSize="xl">
              {property?.propertyName}
            </Box>
          </Box>

          <Box w="max-content">
            <Text mb={2} fontSize="sm" color="gray">
              Property Type
            </Text>
            <Box
              p={2}
              px={8}
              borderRadius={10}
              bg="white"
              fontSize="xl"
              textTransform="capitalize"
            >
              {property?.propertyType}
            </Box>
          </Box>
        </SimpleGrid>
      </GridItem>

      <GridItem
        p={4}
        border="1px dashed"
        borderColor="gray.100"
        borderRadius={10}
      >
        <SimpleGrid columns={1} spacing={2}>
          <Box w="max-content">
            <Text mb={2} fontSize="sm" color="gray">
              Check-In Time
            </Text>
            <Box
              p={2}
              px={4}
              borderRadius={10}
              bg="white"
              fontSize="xl"
              textTransform="capitalize"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={8}
            >
              {property?.checkInTime}
              <Icon as={BsClock} />
            </Box>
          </Box>

          <Box w="max-content">
            <Text mb={2} fontSize="sm" color="gray">
              Check-Out Time
            </Text>
            <Box
              p={2}
              px={4}
              borderRadius={10}
              bg="white"
              fontSize="xl"
              textTransform="capitalize"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={8}
            >
              {property?.checkOutTime}
              <Icon as={BsClock} />
            </Box>
          </Box>
        </SimpleGrid>
      </GridItem>

      <GridItem>
        <SimpleGrid
          columns={1}
          spacing={2}
          p={4}
          border="1px dashed"
          borderColor="gray.100"
          borderRadius={10}
        >
          <Box w="max-content">
            <Text mb={2} fontSize="sm" color="gray">
              Address
            </Text>
            <Box
              p={2}
              px={4}
              borderRadius={10}
              bg="white"
              fontSize="xl"
              textTransform="capitalize"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={8}
            >
              <Icon as={BiBuilding} />
              {property?.address}
            </Box>
          </Box>

          <Box w="max-content">
            <Text mb={2} fontSize="sm" color="gray">
              City
            </Text>
            <Box
              p={2}
              px={4}
              borderRadius={10}
              bg="white"
              fontSize="xl"
              textTransform="capitalize"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={8}
            >
              {property?.city}
              <Icon as={IoLocation} />
            </Box>
          </Box>

          <Box w="max-content">
            <Text mb={2} fontSize="sm" color="gray">
              Country
            </Text>
            <Box
              p={2}
              px={4}
              borderRadius={10}
              bg="white"
              fontSize="xl"
              textTransform="capitalize"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={8}
            >
              {property?.country}
              <Icon as={BiGlobe} />
            </Box>
          </Box>

          <Box w="max-content">
            <Text mb={2} fontSize="sm" color="gray">
              Zipcode
            </Text>
            <Box
              p={2}
              px={4}
              borderRadius={10}
              bg="white"
              fontSize="xl"
              textTransform="capitalize"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={8}
            >
              {property?.zipcode}
              <Icon as={MdLinearScale} />
            </Box>
          </Box>
        </SimpleGrid>
      </GridItem>

      <GridItem>
        <SimpleGrid
          spacing={2}
          p={4}
          border="1px dashed"
          borderColor="gray.100"
          borderRadius={10}
        >
          <Box w="max-content">
            <Text mb={2} fontSize="sm" color="gray">
              Amenities
            </Text>
            <SimpleGrid columns={2}>
              <Flex
                p={2}
                borderRadius={10}
                textTransform="capitalize"
                fontSize="md"
                bg="green.100"
                border="1px solid"
                borderColor="green.300"
                gap={4}
                align="center"
              >
                pets allowed
                <Icon as={IoClose} />
              </Flex>
            </SimpleGrid>
          </Box>

          <Box w="max-content" mt={4}>
            <Text mb={2} fontSize="sm" color="gray">
              Not selected
            </Text>

            <SimpleGrid columns={2} spacing={4}>
              <Flex
                p={2}
                borderRadius={10}
                textTransform="capitalize"
                fontSize="md"
                bg="red.100"
                border="1px solid"
                borderColor="red.300"
                gap={4}
                align="center"
              >
                pets allowed
              </Flex>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </GridItem>

      <GridItem
        p={4}
        border="1px dashed"
        borderColor="gray.100"
        borderRadius={10}
      >
        <SimpleGrid columns={2} spacing={2}>
          <Box w="max-content">
            <Text mb={2} fontSize="sm" color="gray">
              Manager
            </Text>
            <Box
              p={2}
              px={4}
              borderRadius={10}
              bg="white"
              fontSize="xl"
              textTransform="capitalize"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={8}
            >
              {property?.manager}
              <Icon as={BsClock} />
            </Box>
          </Box>
        </SimpleGrid>
      </GridItem>
    </Flex>
  );
};

export default EditPropertyPage;
