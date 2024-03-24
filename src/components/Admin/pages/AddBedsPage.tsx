import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BiChevronDownCircle, BiLeftArrowCircle } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { PropertyRoom } from "../../entities/property";
import { useGetSingleProperty } from "../../hooks/usePropertyServices";
import AnimateMove from "../../motions/Move";
import AddBedSection from "../elements/AddRoom/AddBedSection";
import BedTile from "../elements/AddRoom/BedTile";
import Title from "../elements/Title";
import AddBedSubmitButton from "../elements/AddRoom/AddBedSubmitButton";

const AddBedsPage = () => {
  const propertyId = useParams().id;
  const { data: property, isLoading } = useGetSingleProperty(
    propertyId!,
    !!propertyId
  );
  const ref = useRef(null);
  const [room, setRoom] = useState<PropertyRoom | undefined>();
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
            {room?.roomName || "Select"}
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

      {room && (
        <AnimateMove>
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
                  property?.rooms
                    ?.find((r) => room._id === r._id)
                    ?.beds.map((bed, i) => (
                      <AnimateMove delay={0.2} key={i}>
                        <BedTile
                          bedNo={bed.bedNo}
                          color="white"
                          action="api"
                          bedId={bed._id}
                          propertyId={property._id}
                          roomId={room._id}
                        />
                      </AnimateMove>
                    ))}
              </SimpleGrid>
            </Box>

            <Divider variant="dashed" maxW={200} m="auto" />

            {room && (
              <AddBedSection
                propertyId={propertyId!}
                roomId={room?._id}
                count={
                  room?.beds.length === room.beds[room?.beds.length - 1].bedNo // checking the last bed's no is === bed's length
                    ? room?.beds.length // if true serialize from it.
                    : room.beds[room?.beds.length - 1].bedNo // if not serialize from last bed's no.
                }
              />
            )}
          </Box>
        </AnimateMove>
      )}

      <VStack gap={4} mt={8}>
        <Title
          heading="Submit Edits"
          subtitle="Add or remove bed & submit"
          size="xl"
          substitleSize="xs"
        />
        <AddBedSubmitButton propertyId={propertyId!} roomId={room?._id} />
      </VStack>
    </Flex>
  );
};

export default AddBedsPage;
