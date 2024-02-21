import { Box, Button, Flex, Image, Input, VStack } from "@chakra-ui/react";
import AddTitle from "../../elements/AddTitle";
import i from "../../../../assets/app/building.png";

interface NamePageProps {
  forward?: () => void;
}

const NamePage = ({ forward }: NamePageProps) => {
  return (
    <Flex h="100%" flexDir="column" gap={8} alignItems="center">
      <Image src={i} alt="" w={350} />

      <AddTitle
        heading="Add New Property"
        subtitle="Enter Property Name & Type"
      />

      <VStack gap={4}>
        <Input bg="gray.50" placeholder="Property Name" />
        <Input bg="gray.50" placeholder="Property Type" />
      </VStack>

      <Box>
        <Button onClick={forward} id="extra" colorScheme="primary">
          Next
        </Button>
      </Box>
    </Flex>
  );
};

export default NamePage;
