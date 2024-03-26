import { Button, HStack, Image, VStack } from "@chakra-ui/react";
import { BsBuilding } from "react-icons/bs";
import building from "../../../../assets/app/building.png";
import AnimateMove from "../../../motions/Move";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";
import LabelInput from "../../elements/LabelInput";
import NavigatorWrapper from "../../elements/NavigatorWrapper";
import Title from "../../elements/Title";

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
          subtitle="Enter Property Name"
          size="lg"
          substitleSize="xs"
        />

        <VStack gap={4} mt={4}>
          <LabelInput
            icon={BsBuilding}
            label="Property Name"
            value={name || ""}
            onChange={(value) => setName(value)}
          />
        </VStack>

        <HStack mt={4}>
          <NavigatorWrapper to="/admin/properties">
            <Button id="extra"> Cancel </Button>
          </NavigatorWrapper>
          <NavigatorWrapper to="/admin/properties/add/2">
            <Button
              id="extra"
              colorScheme="primary"
              isDisabled={!!name && !!name ? false : true}
            >
              Next
            </Button>
          </NavigatorWrapper>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default NamePage;
