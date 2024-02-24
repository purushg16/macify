import { Button, Flex, HStack, Input, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AnimateMove from "../../../motions/Move";
import AddManagerModal from "../../elements/AddProperty/AddManagerModal";
import ManagersList from "../../elements/AddProperty/ManagersList";
import AddTitle from "../../elements/AddTitle";

const ManagerPage = () => {
  return (
    <>
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
        <AddTitle
          heading="Assign Manager"
          subtitle="Assign manager for this property or create a new one"
        />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <HStack>
          <Link to="/admin/add/property/6">
            <Button id="extra">Back</Button>
          </Link>
          <Link to="/admin/add/property/8">
            <Button id="extra" colorScheme="primary">
              Next
            </Button>
          </Link>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default ManagerPage;
