import { useParams } from "react-router-dom";
import { useGetSingleProperty } from "../../hooks/usePropertyServices";
import {
  Box,
  Button,
  Flex,
  GridItem,
  Icon,
  SimpleGrid,
  Spacer,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { BiGlobe } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { MdDeleteOutline, MdLinearScale } from "react-icons/md";
import { TiUserOutline } from "react-icons/ti";
import PropertyField from "../elements/EditProperty/PropertyField";
import EditPropertyValue from "../elements/EditProperty/EditPropertyValue";
import EditPropertyIconValue from "../elements/EditProperty/EditPropertyIconValue";
import { BsBuilding, BsClock } from "react-icons/bs";
import EditPropertyAmenityTag from "../elements/EditProperty/EditPropertyAmenityTag";
import Title from "../elements/Title";
import EditPropertySubmitButton from "../elements/EditProperty/EditPropertySubmitButton";

const EditPropertyPage = () => {
  const id = useParams().id;
  const { data: property } = useGetSingleProperty(id!, !!id);

  if (!property) return <Spinner />;
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
      <GridItem pt={4} px={2}>
        <Flex>
          <Title
            heading={property?.propertyName}
            subtitle={property?.propertyType}
            align="left"
          />
          <Spacer />
          <Button
            size="sm"
            bg="red.100"
            _hover={{ bg: "red.200" }}
            border="1px solid"
            borderColor="red.300"
          >
            <Icon as={MdDeleteOutline} />
          </Button>
        </Flex>
      </GridItem>
      <GridItem>
        <PropertyField fieldTitle="Basics">
          <EditPropertyValue
            label="Property Name"
            value={property?.propertyName}
          />
          <EditPropertyValue
            label="Property Type"
            value={property?.propertyType}
          />
        </PropertyField>
      </GridItem>

      <GridItem>
        <PropertyField fieldTitle="Checking Time">
          <EditPropertyIconValue
            title="Check-In Time"
            time={property?.checkInTime}
            icon={BsClock}
          />
          <EditPropertyIconValue
            title="Check-Out Time"
            time={property?.checkOutTime}
            icon={BsClock}
          />
        </PropertyField>
      </GridItem>

      <GridItem>
        <PropertyField fieldTitle="Locations">
          <EditPropertyIconValue
            title="Address"
            time={property?.address}
            icon={BsBuilding}
          />
          <EditPropertyIconValue
            title="City"
            time={property?.city}
            icon={IoLocation}
          />
          <EditPropertyIconValue
            title="Country"
            time={property?.country}
            icon={BiGlobe}
          />
          <EditPropertyIconValue
            title="Zipcode"
            time={property?.zipcode}
            icon={MdLinearScale}
          />
        </PropertyField>
      </GridItem>

      <GridItem>
        <PropertyField fieldTitle="Amenities">
          <Box w="max-content">
            <Text mb={2} fontSize="sm" color="gray">
              Amenities
            </Text>
            <SimpleGrid columns={2}>
              <EditPropertyAmenityTag amenity="Pets Allowed" selected />
            </SimpleGrid>
          </Box>

          {/* <Box w="max-content" mt={4}>
            <Text mb={2} fontSize="sm" color="gray">
              Not selected
            </Text>

            <SimpleGrid columns={2} spacing={4}>
              <EditPropertyAmenityTag amenity="Pets Allowed" />
              <EditPropertyAmenityTag amenity="Pets Allowed" />
            </SimpleGrid>
          </Box> */}
        </PropertyField>
      </GridItem>

      <GridItem>
        <PropertyField fieldTitle="Manager">
          <EditPropertyIconValue
            title="Manager"
            time={property?.manager.name}
            icon={TiUserOutline}
          />
        </PropertyField>
      </GridItem>

      <GridItem textAlign="center">
        <Title heading="Edit Details" subtitle="Add or remove field & submit" />
        <EditPropertySubmitButton />
        {/* // property={property} */}
      </GridItem>
    </Flex>
  );
};

export default EditPropertyPage;
