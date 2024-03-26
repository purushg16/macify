import AmenitiesGrid from "../../elements/AddProperty/AmenitiesGrid";
import Title from "../../elements/Title";
import { HStack, Button } from "@chakra-ui/react";
import AnimateMove from "../../../motions/Move";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";
import NavigatorWrapper from "../../elements/NavigatorWrapper";

const AmenitiesPages = () => {
  const amenities = useAddPropertyStore((s) => s.amenities);
  return (
    <>
      <AnimateMove delay={0.2}>
        <AmenitiesGrid />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <Title
          heading="Choose Amenities"
          subtitle="Select all the amenities available. Select atleast one!"
          size="lg"
          substitleSize="xs"
        />
        <HStack mt={2}>
          <NavigatorWrapper to="/admin/properties/add/4">
            <Button id="extra">Back</Button>
          </NavigatorWrapper>
          <NavigatorWrapper to="/admin/properties/add/6">
            <Button
              id="extra"
              colorScheme="primary"
              isDisabled={!amenities || amenities.length === 0}
            >
              Next
            </Button>
          </NavigatorWrapper>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default AmenitiesPages;
