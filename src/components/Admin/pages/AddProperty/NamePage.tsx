import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Input,
  VStack,
} from "@chakra-ui/react";
import building from "../../../../assets/app/building.png";
import AddTitle from "../../elements/AddTitle";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { TbChevronsDown } from "react-icons/tb";
import AnimateMove from "../../../motions/Move";

interface NamePageProps {
  forward?: () => void;
}

const NamePage = ({ forward }: NamePageProps) => {
  return (
    <Flex h="100%" flexDir="column" gap={8} alignItems="center">
      <AnimateMove delay={0.2}>
        <Image src={building} alt="" w={350} />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <AddTitle
          heading="Add New Property"
          subtitle="Enter Property Name & Type"
        />
      </AnimateMove>

      <AnimateMove delay={0.6}>
        <VStack gap={4}>
          <Input bg="gray.50" placeholder="Property Name" />

          <Box position="relative">
            <Input placeholder="Property Type" bg="gray.50" />
            <Menu>
              <MenuButton
                _hover={{ bg: "gray.700" }}
                as={Button}
                pos="absolute"
                right={2}
                top={1}
                p={0}
                bg="black"
                color="white"
                size="sm"
              >
                <Icon as={TbChevronsDown} p={0} />
              </MenuButton>
              <MenuList p={1} borderRadius={20}>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </VStack>
      </AnimateMove>

      <AnimateMove delay={0.8}>
        <Box>
          <Button onClick={forward} id="extra" colorScheme="primary">
            Next
          </Button>
        </Box>
      </AnimateMove>
    </Flex>
  );
};

export default NamePage;
