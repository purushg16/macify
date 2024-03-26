import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import AnimateMove from "../../../motions/Move";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";
import NavigatorWrapper from "../../elements/NavigatorWrapper";
import Title from "../../elements/Title";
import LabelInput from "../../elements/LabelInput";
import { FaCity } from "react-icons/fa";
import { BiDotsHorizontal } from "react-icons/bi";
import { IoGlobeOutline } from "react-icons/io5";

const PropertyAddressPage = () => {
  const address = useAddPropertyStore((s) => s.address);
  const setAddress = useAddPropertyStore((s) => s.setAddress);

  const city = useAddPropertyStore((s) => s.city);
  const setCity = useAddPropertyStore((s) => s.setCity);

  const zipCode = useAddPropertyStore((s) => s.zipcode);
  const setZipCode = useAddPropertyStore((s) => s.setZipCode);

  const country = useAddPropertyStore((s) => s.country);
  const setCountry = useAddPropertyStore((s) => s.setCountry);

  return (
    <>
      <AnimateMove delay={0.2} noWidth>
        <VStack gap={4} bg="#f5f5f5" p={6} borderRadius={20} w="100%">
          <FormControl>
            <FormLabel fontSize="xs"> Address </FormLabel>
            <Textarea
              bg="gray.50"
              placeholder="Address"
              value={address || ""}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>

          <LabelInput
            icon={FaCity}
            label="City"
            value={city || ""}
            onChange={(value) => setCity(value)}
          />
          <LabelInput
            icon={BiDotsHorizontal}
            label="Zip Cope"
            value={zipCode || ""}
            onChange={(value) => setZipCode(value)}
          />
          <LabelInput
            icon={IoGlobeOutline}
            label="Country"
            value={country || ""}
            onChange={(value) => setCountry(value)}
          />
        </VStack>
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <Title
          heading="Address Details"
          subtitle="Provide this property’s location details"
          size="lg"
          substitleSize="xs"
        />
        <HStack mt={2}>
          <NavigatorWrapper to="/admin/properties/add/5">
            <Button id="extra">Back</Button>
          </NavigatorWrapper>
          <NavigatorWrapper to="/admin/properties/add/7">
            <Button
              id="extra"
              colorScheme="primary"
              isDisabled={!address || !city || !zipCode || !country}
            >
              Next
            </Button>
          </NavigatorWrapper>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default PropertyAddressPage;
