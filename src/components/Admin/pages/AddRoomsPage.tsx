import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import Title from "../elements/Title";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProperty } from "../../hooks/usePropertyServices";
import { BiLeftArrowCircle } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";
import AddRoomSection from "../elements/AddRoom/AddRoomSection";
import AddRoomSubmitButton from "../elements/AddRoom/AddRoomSubmitButton";

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
          <Heading fontSize="md" m={0}>
            All Rooms
          </Heading>
        </Box>

        <Box mb={6}>
          <Heading fontSize="sm" color="gray.200" mb={2}>
            Present Rooms
          </Heading>
          <SimpleGrid columns={2} spacing={4}>
            {property?.rooms.map((room) => (
              <Flex
                p={4}
                gap={2}
                bg="white"
                key={room._id}
                borderRadius={20}
                align="center"
                justify="space-between"
              >
                <Box textAlign="left">
                  <Heading size="xs">{room.roomName}</Heading>
                  <Text fontSize="xs">Capacity: {room.guestCapacity}</Text>
                </Box>
                <Icon
                  as={IoCloseCircleOutline}
                  color="red.500"
                  cursor="pointer"
                />
              </Flex>
            ))}
          </SimpleGrid>
        </Box>

        <Divider variant="dashed" maxW={200} m="auto" />

        {property && <AddRoomSection propertyId={propertyId!} />}
      </Box>

      <VStack gap={4}>
        <Title
          heading="Submit Edits"
          subtitle="Add or remove rooms & submit"
          size="xl"
          substitleSize="xs"
        />
        <AddRoomSubmitButton propertyId={propertyId!} />
      </VStack>
    </Flex>
  );
};

export default AddRoomsPage;
