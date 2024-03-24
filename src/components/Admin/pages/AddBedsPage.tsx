import {
  Flex,
  Box,
  Button,
  Spinner,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  SimpleGrid,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { BiChevronDownCircle, BiLeftArrowCircle } from "react-icons/bi";
import Title from "../elements/Title";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProperty } from "../../hooks/usePropertyServices";
import { useRef, useState } from "react";
import { PropertyRoom } from "../../entities/property";
import { IoBedOutline, IoCloseCircleOutline } from "react-icons/io5";
import AddBedSection from "../elements/AddRoom/AddBedSection";

const AddBedsPage = () => {
  const propertyId = useParams().id;
  const { data: property, isLoading } = useGetSingleProperty(
    propertyId!,
    !!propertyId
  );
  const ref = useRef(null);

  const [room, setRoom] = useState<PropertyRoom>();

  if (isLoading) return <Spinner />;
  return (
    <Flex gap={4} flexDir="column">
      <Box>
        <Link to="/admin/properties">
          <Button size="xs" leftIcon={<BiLeftArrowCircle />} mb={4}>
            Back
          </Button>
        </Link>
        <Title
          heading="Add Beds"
          size="xl"
          subtitle={property?.propertyName}
          align="left"
        />
      </Box>

      <Flex
        align="center"
        justify="space-between"
        p={4}
        bg="#f4f4f4"
        borderRadius={20}
      >
        <Heading fontSize="md" m={0}>
          Select Room
        </Heading>
        <Menu initialFocusRef={ref}>
          <MenuButton
            as={Button}
            size="sm"
            rightIcon={<BiChevronDownCircle />}
            _hover={{ bg: "gray.200" }}
          >
            Select
          </MenuButton>
          <MenuList maxH={200} overflowY="auto" borderRadius={20} p={2}>
            {property?.rooms.map((room) => (
              <MenuItem key={room._id} onClick={() => setRoom(room!)}>
                {room.roomName}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>

      <Box p={4} bg="#f4f4f4" borderRadius={20}>
        <Box pb={4} mb={8} borderBottom="1px solid" borderColor="gray.100">
          <Heading fontSize="md" m={0}>
            {room?.roomName}
          </Heading>
        </Box>

        <Box mb={6}>
          <Heading fontSize="sm" color="gray.200" mb={2}>
            Present Beds
          </Heading>
          <SimpleGrid columns={2} spacing={4} mb={8}>
            {room &&
              room.beds.map((bed) => (
                <Flex
                  bg="white"
                  key={bed._id}
                  p={2}
                  gap={2}
                  borderRadius={20}
                  flexDir="column"
                  align="center"
                >
                  <Icon
                    alignSelf="end"
                    as={IoCloseCircleOutline}
                    color="red.500"
                    onClick={() => {}}
                  />
                  <Icon as={IoBedOutline} boxSize={8} />
                  Bed {bed.bedNo}
                </Flex>
              ))}
          </SimpleGrid>
        </Box>

        <Divider variant="dashed" maxW={200} m="auto" />

        <AddBedSection propertyId={propertyId!} roomId={room?._id} />
      </Box>
    </Flex>
  );
};

export default AddBedsPage;
