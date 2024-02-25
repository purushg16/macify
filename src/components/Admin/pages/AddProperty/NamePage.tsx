import { Button, HStack, Image, Input, VStack } from "@chakra-ui/react";
import building from "../../../../assets/app/building.png";
import Title from "../../elements/Title";
import AnimateMove from "../../../motions/Move";
import { Link } from "react-router-dom";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";

const NamePage = () => {
  const name = useAddPropertyStore((s) => s.propertyName);
  const setName = useAddPropertyStore((s) => s.setPropertyName);

  return (
    <>
      <AnimateMove delay={0.2}>
        <Image src={building} alt="" w={350} />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <Title
          heading="Add New Property"
          subtitle="Enter Property Name & Type"
        />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <VStack gap={4}>
          <Input
            bg="gray.50"
            placeholder="Property Name"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />
        </VStack>
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <HStack>
          <Link to="/admin/properties">
            <Button id="extra"> Cancel </Button>
          </Link>
          <Link to="/admin/properties/add/2">
            <Button
              id="extra"
              colorScheme="primary"
              isDisabled={!!name && !!name ? false : true}
            >
              Next
            </Button>
          </Link>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default NamePage;
