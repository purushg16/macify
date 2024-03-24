import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import Title from "../elements/Title";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProperty } from "../../hooks/usePropertyServices";
import { BiLeftArrowCircle, BiPlusCircle } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";

const AddRoomsPage = () => {
  const propertyId = useParams().id;
  const { data: property, isLoading } = useGetSingleProperty(
    propertyId!,
    !!propertyId
  );

  if (isLoading) return <Spinner />;
  return (
    <Flex gap={12} flexDir="column">
      <Box>
        <Link to="/admin/properties">
          <Button size="xs" leftIcon={<BiLeftArrowCircle />} mb={4}>
            Back
          </Button>
        </Link>
        <Title
          heading="Add Rooms"
          size="xl"
          subtitle={property?.propertyName}
          align="left"
        />
      </Box>

      <Box p={4} bg="#f4f4f4" borderRadius={20}>
        <Box pb={4} mb={8} borderBottom="1px solid" borderColor="gray.100">
          <Heading fontSize="md">All Rooms</Heading>
        </Box>

        <Box mb={6}>
          <Heading fontSize="sm" color="gray" mb={2}>
            Present Rooms
          </Heading>
          <SimpleGrid columns={2} spacing={4}>
            {property?.rooms.map((room) => (
              <Button
                bg="white"
                _hover={{ bg: "white" }}
                key={room._id}
                rightIcon={
                  <Icon
                    as={IoCloseCircleOutline}
                    color="red.500"
                    cursor="pointer"
                  />
                }
                justifyContent="space-between"
                cursor="default"
              >
                {room.roomName}
              </Button>
            ))}
          </SimpleGrid>
        </Box>

        <Divider variant="dashed" maxW={200} m="auto" />

        <Box mt={6}>
          <Heading fontSize="sm" color="gray" mb={2}>
            Added Rooms
          </Heading>
          <SimpleGrid columns={2} spacing={4}>
            <Button
              colorScheme="primary"
              leftIcon={<BiPlusCircle />}
              w="max-content"
            >
              Add
            </Button>
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  );
};

export default AddRoomsPage;
