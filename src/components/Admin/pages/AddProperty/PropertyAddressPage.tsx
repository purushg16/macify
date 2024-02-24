import { Button, HStack, Input, Textarea, VStack } from "@chakra-ui/react";
import AddTitle from "../../elements/AddTitle";
import AnimateMove from "../../../motions/Move";
import { Link } from "react-router-dom";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";

const PropertyAddressPage = () => {
  const address = useAddPropertyStore((s) => s.address);
  const setAddress = useAddPropertyStore((s) => s.setAddress);

  const city = useAddPropertyStore((s) => s.city);
  const setCity = useAddPropertyStore((s) => s.setCity);

  const zipCode = useAddPropertyStore((s) => s.zipCode);
  const setZipCode = useAddPropertyStore((s) => s.setZipCode);

  const country = useAddPropertyStore((s) => s.country);
  const setCountry = useAddPropertyStore((s) => s.setCountry);

  return (
    <>
      <AnimateMove delay={0.2}>
        <VStack gap={8} bg="#f5f5f5" p={6} borderRadius={20}>
          <Textarea
            bg="gray.50"
            placeholder="Address"
            w={300}
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
        <AddTitle
          heading="Address Details"
          subtitle="Provide this property’s location details"
        />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <HStack>
          <Link to="/admin/add/property/5">
            <Button id="extra">Back</Button>
          </Link>
          <Link to="/admin/add/property/7">
            <Button id="extra" colorScheme="primary">
              Next
            </Button>
          </Link>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default PropertyAddressPage;
