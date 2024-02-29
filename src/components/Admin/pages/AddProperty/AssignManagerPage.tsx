import {
  Button,
  Flex,
  HStack,
  Heading,
  Highlight,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import AnimateMove from "../../../motions/Move";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";
import AddManagerModal from "../../elements/AddProperty/AddManagerModal";
import ManagersList from "../../elements/AddProperty/ManagersList";
import NavigatorWrapper from "../../elements/NavigatorWrapper";
import Title from "../../elements/Title";

const AssignManagerPage = () => {
  const manager = useAddPropertyStore((s) => s.manager);

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
          py={4}
          px={8}
          flexDir="column"
          gap={4}
          borderRadius={20}
          maxW={600}
        >
          <Flex w="100%">
            <Text> Select Manager </Text>
            <Spacer />
            <AddManagerModal />
          </Flex>

          <Input placeholder="Search" bg="gray.50" />
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
          <NavigatorWrapper to="/admin/properties/add/8">
            <Button id="extra" colorScheme="primary" isDisabled={!manager}>
              Finish
            </Button>
          </NavigatorWrapper>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default AssignManagerPage;
