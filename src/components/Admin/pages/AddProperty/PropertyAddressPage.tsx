import { Input, Textarea, VStack } from "@chakra-ui/react";
import AddTitle from "../../elements/AddTitle";

const PropertyAddressPage = () => {
  return (
    <>
      <VStack gap={4}>
        <Textarea bg="gray.50" placeholder="Address" />
        <Input bg="gray.50" placeholder="City" />
        <Input bg="gray.50" placeholder="Zip Cope" />
        <Input bg="gray.50" placeholder="Country" />
      </VStack>

      <AddTitle
        heading="Address Details"
        subtitle="Provide this property’s location details"
      />
    </>
  );
};

export default PropertyAddressPage;
