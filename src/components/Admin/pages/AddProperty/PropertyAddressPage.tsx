import { Input, Textarea, VStack } from "@chakra-ui/react";
import AddTitle from "../../elements/AddTitle";

const PropertyAddressPage = () => {
  return (
    <>
      <VStack gap={8} bg="#f5f5f5" p={6} borderRadius={20}>
        <Textarea bg="gray.50" placeholder="Address" w={300} />
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
