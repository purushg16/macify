import {
  Button,
  Flex,
  HStack,
  Heading,
  Highlight,
  Spacer,
  Text,
} from "@chakra-ui/react";
import AnimateMove from "../../../motions/Move";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";
import AddManagerModal from "../../elements/AddProperty/AddManagerModal";
import ManagersList from "../../elements/AddProperty/ManagersList";
import NavigatorWrapper from "../../elements/NavigatorWrapper";
import Title from "../../elements/Title";
import { usePostProperty } from "../../../hooks/usePropertyServices";

const AssignManagerPage = () => {
  const manager = useAddPropertyStore((s) => s.manager);

  const { mutate, isPending } = usePostProperty();
  const handleSubmit = () => mutate();

  return (
    <>
      {!!manager && (
        <AnimateMove delay={0.4}>
          <Heading
            fontSize="lg"
            width="70%"
            my={0}
            mx="auto"
            textAlign="center"
          >
            <Highlight
              query={manager.name}
              styles={{ color: "primary.500" }}
              children={`${manager.name} has been successfully assigned a manager for this
          property`}
            />
          </Heading>
        </AnimateMove>
      )}

      <AnimateMove delay={0.4} noWidth>
        <Flex
          mx="auto"
          w="100%"
          bg="#f5f5f5"
          p={4}
          flexDir="column"
          gap={4}
          borderRadius={20}
          maxW={600}
        >
          <Flex w="100%" align="center">
            <Text> Select Manager </Text>
            <Spacer />
            <AddManagerModal small />
          </Flex>
          <ManagersList />
        </Flex>
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <Title
          heading="Assign Manager"
          subtitle="Assign manager for this property or create a new one"
        />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <HStack>
          <NavigatorWrapper to="/admin/properties/add/6">
            <Button id="extra">Back</Button>
          </NavigatorWrapper>

          <Button
            id="extra"
            colorScheme="primary"
            isLoading={isPending}
            isDisabled={!manager}
            onClick={handleSubmit}
          >
            Finish
          </Button>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default AssignManagerPage;
