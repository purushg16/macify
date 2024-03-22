import { useParams } from "react-router-dom";
import { useGetSingleProperty } from "../../hooks/usePropertyServices";
import {
  Box,
  Button,
  Flex,
  GridItem,
  Icon,
  Spacer,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { BiGlobe, BiTag } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { MdDeleteOutline, MdLinearScale } from "react-icons/md";
import { TiUserOutline } from "react-icons/ti";
import PropertyField from "../elements/EditProperty/PropertyField";
import EditPropertyValue from "../elements/EditProperty/EditPropertyValue";
import EditPropertyIconValue from "../elements/EditProperty/EditPropertyIconValue";
import { BsBuilding } from "react-icons/bs";
import EditPropertyAmenityTag from "../elements/EditProperty/EditPropertyAmenityTag";
import Title from "../elements/Title";
import EditPropertySubmitButton from "../elements/EditProperty/EditPropertySubmitButton";
import EditPropertyTypeSelector from "../elements/EditProperty/EditPropertyTypeSelector";
import { useState } from "react";
import { PropertyType } from "../../store/AddProperty/addPropertyBasicStore";
import CheckingTimePicker from "../elements/EditProperty/EditPropertyCheckingPicker";
import amenitiesData from "../../data/amenitiesData";

const EditPropertyPage = () => {
  const id = useParams().id;
  const { data: property } = useGetSingleProperty(id!, !!id);

  const [propertyName, setPropertyName] = useState<string | undefined>(
    property?.propertyName
  );
  const [type, setType] = useState<PropertyType>(property?.propertyType);
  const [checkInTime, setCheckInTime] = useState<string>(
    property?.checkInTime || ""
  );
  const [checkOutTime, setCheckOutTime] = useState<string>(
    property?.checkOutTime || ""
  );
  const [address, setAddress] = useState<string | undefined>(property?.address);
  const [city, setCity] = useState<string | undefined>(property?.city);
  const [country, setCountry] = useState<string | undefined>(property?.country);
  const [zipcode, setZipcode] = useState<string | undefined>(property?.zipcode);
  const [amenities, setAmenities] = useState<string[] | undefined>(
    property?.amenities
  );

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
            value={propertyName}
            onchange={setPropertyName}
            icon={BiTag}
          />
          <EditPropertyTypeSelector
            label="Property Type"
            type={type}
            setType={setType}
          />
        </PropertyField>
      </GridItem>

      <GridItem>
        <PropertyField fieldTitle="Checking Time">
          <CheckingTimePicker
            title="Check In Time"
            time={checkInTime!}
            onSelect={setCheckInTime}
            zindex={2}
          />
          <CheckingTimePicker
            title="Check Out Time"
            time={checkOutTime!}
            onSelect={setCheckOutTime}
            zindex={1}
          />
        </PropertyField>
      </GridItem>

      <GridItem>
        <PropertyField fieldTitle="Locations">
          <EditPropertyValue
            value={address}
            label="Address"
            onchange={setAddress}
            icon={BsBuilding}
          />
          <EditPropertyValue
            label="City"
            value={city}
            onchange={setCity}
            icon={IoLocationOutline}
          />
          <EditPropertyValue
            label="Country"
            value={country}
            onchange={setCountry}
            icon={BiGlobe}
          />
          <EditPropertyValue
            label="Zipcode"
            value={zipcode}
            onchange={setZipcode}
            icon={MdLinearScale}
          />
        </PropertyField>
      </GridItem>

      <GridItem>
        <PropertyField fieldTitle="Amenities">
          <Box>
            <Text mb={2} fontSize="sm" color="gray">
              Amenities
            </Text>
            {amenities?.length && amenities?.length > 0 ? (
              <Flex gap={2} flexWrap="wrap" maxWidth="100%" overflowX="auto">
                {amenities?.map((amenity) => (
                  <EditPropertyAmenityTag
                    amenity={amenity}
                    selected
                    onClick={(a) =>
                      setAmenities(amenities.filter((a1) => a1 !== a))
                    }
                  />
                ))}
              </Flex>
            ) : (
              <Text color="gray" fontSize="xs" textAlign="center">
                No amenities in this property
              </Text>
            )}
          </Box>

          {amenitiesData.filter((am) => !amenities?.includes(am)).length >
            0 && (
            <Box mt={4}>
              <Text mb={2} fontSize="sm" color="gray">
                You can add
              </Text>
              <Flex gap={2} flexWrap="wrap" maxWidth="100%" overflowX="auto">
                {amenitiesData
                  .filter((am) => !amenities?.includes(am))
                  .map((amenity) => (
                    <EditPropertyAmenityTag
                      amenity={amenity}
                      onClick={(a) => setAmenities([...amenities!, a])}
                    />
                  ))}
              </Flex>
            </Box>
          )}
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
      </GridItem>
    </Flex>
  );
};

export default EditPropertyPage;
