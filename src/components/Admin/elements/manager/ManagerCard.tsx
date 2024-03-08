import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { BsArrowRight, BsBuilding } from "react-icons/bs";
// import { CiUser } from "react-icons/ci";
import { RiUser6Fill } from "react-icons/ri";
import Manager from "../../../entities/manager";

interface ManagerCardProps {
  manager: Manager;
}

const Temp = ({ manager }: ManagerCardProps) => {
  return (
    <Flex
      w="100%"
      borderRadius={10}
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;"
    >
      <Box
        w={110}
        bg="primary.50"
        borderLeftRadius={10}
        pos="relative"
        overflow="hidden"
      >
        <Icon
          as={RiUser6Fill}
          pos="absolute"
          h="100%"
          w="150%"
          right={-10}
          zIndex={1}
        />
      </Box>

      <Box
        flex={1}
        w="100%"
        p={4}
        bg="white"
        borderRightRadius={10}
        zIndex={20}
      >
        <Flex justify="space-between" flexDir="column" w="100%" gap={16}>
          <Box>
            <Heading fontSize="2xl">{manager.name}</Heading>
            <Text color="gray"> {manager.phone} </Text>
          </Box>
          <HStack justify="space-between" w="100%">
            <Flex
              gap={2}
              bg="primary.50"
              p={4}
              borderRadius={10}
              align="center"
            >
              <Icon as={BsBuilding} boxSize={6} />
              <Heading fontSize="xl">3</Heading>
            </Flex>
            <IconButton
              aria-label="number of porperties"
              icon={<Icon as={BsArrowRight} transform="rotate(320deg)" />}
            />
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Temp;
