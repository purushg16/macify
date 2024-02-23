import { Link } from "react-router-dom";
import AmenitiesGrid from "../../elements/AddProperty/AmenitiesGrid";
import AddTitle from "../../elements/AddTitle";
import { HStack, Button } from "@chakra-ui/react";
import AnimateMove from "../../../motions/Move";

const AmenitiesPages = () => {
  return (
    <>
      <AnimateMove delay={0.2}>
        <AmenitiesGrid />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <AddTitle
          heading="Choose Amenities"
          subtitle="Select all the amenities available "
        />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <HStack>
          <Link to="/admin/add/property/4">
            <Button id="extra">Back</Button>
          </Link>
          <Link to="/admin/add/property/6">
            <Button id="extra" colorScheme="primary">
              Next
            </Button>
          </Link>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default AmenitiesPages;
