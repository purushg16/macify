import { Button, HStack, Input, Textarea, VStack } from "@chakra-ui/react";
import AddTitle from "../../elements/AddTitle";
import AnimateMove from "../../../motions/Move";
import { Link } from "react-router-dom";

const PropertyAddressPage = () => {
  return (
    <>
      <AnimateMove delay={0.2}>
        <VStack gap={8} bg="#f5f5f5" p={6} borderRadius={20}>
          <Textarea bg="gray.50" placeholder="Address" w={300} />
          <Input bg="gray.50" placeholder="City" />
          <Input bg="gray.50" placeholder="Zip Cope" />
          <Input bg="gray.50" placeholder="Country" />
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
