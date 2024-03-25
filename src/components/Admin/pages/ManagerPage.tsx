import { Flex, SimpleGrid, Spinner, VStack } from "@chakra-ui/react";
import Title from "../elements/Title";
import ManagerCard from "../elements/manager/ManagerCard";
import AnimateMove from "../../motions/Move";
import { useGetAllManagers } from "../../hooks/useAdmin";
import AddManagerModal from "../elements/AddProperty/AddManagerModal";

const ManagerPage = () => {
  const { data } = useGetAllManagers();

  return (
    <Flex gap={8} flexDir="column">
      <AnimateMove delay={0.2}>
        <VStack align="left">
          <Title
            size="2xl"
            heading="Your Managers"
            subtitle="Add, review, and edit managers here"
            align="left"
          />
          <AddManagerModal />
        </VStack>
      </AnimateMove>

      {!data && <Spinner />}
      {data && (
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={4}>
          {data.data.map((manager, i) => (
            <AnimateMove delay={0.4 * (i + 1)} key={i}>
              <ManagerCard key={manager.name} manager={manager} />
            </AnimateMove>
          ))}
        </SimpleGrid>
      )}
    </Flex>
  );
};

export default ManagerPage;
