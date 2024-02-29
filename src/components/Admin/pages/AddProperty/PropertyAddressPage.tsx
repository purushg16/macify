import { Button, HStack, Input, Textarea, VStack } from "@chakra-ui/react";
import AnimateMove from "../../../motions/Move";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";
import NavigatorWrapper from "../../elements/NavigatorWrapper";
import Title from "../../elements/Title";

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
      <AnimateMove delay={0.2}>
        <VStack
          gap={8}
          bg="#f5f5f5"
          p={6}
          borderRadius={20}
          w={{ base: 400, md: 400, lg: 500 }}
        >
          <Textarea
            bg="gray.50"
            placeholder="Address"
            value={address || ""}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            bg="gray.50"
            placeholder="City"
            value={city || ""}
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            type="number"
            bg="gray.50"
            placeholder="Zip Cope"
            value={zipCode || ""}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <Input
            bg="gray.50"
            placeholder="Country"
            value={country || ""}
            onChange={(e) => setCountry(e.target.value)}
          />
        </VStack>
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <Title
          heading="Address Details"
          subtitle="Provide this property’s location details"
        />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <HStack>
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
