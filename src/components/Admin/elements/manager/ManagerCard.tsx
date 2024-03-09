import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Manager from "../../../entities/manager";
import Title from "../Title";
import MobileNumberFormatter from "../../../functions/mobileNumberFormatter";

interface ManagerCardProps {
  manager: Manager;
}

const Temp = ({ manager }: ManagerCardProps) => {
  return (
    <Flex
      gap={4}
      flexDir="column"
      bg="#f6f6f6"
      p={8}
      px={4}
      borderRadius={10}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;"
    >
      <Box>
        <Title heading={manager.name} subtitle={manager.email} align="left" />
      </Box>
      <SimpleGrid columns={2} gap={4}>
        <Box p={4} bg="gray.50" borderRadius={10}>
          <Text color="gray" fontSize="sm">
            Mobile
          </Text>
          <Heading fontSize="xl">
            {MobileNumberFormatter(manager.phone)[0]} <br />
            {MobileNumberFormatter(manager.phone)[1]}
          </Heading>
        </Box>
        <Box p={4} bg="gray.50" borderRadius={10}>
          <Text color="gray" fontSize="sm">
            Properties Managing
          </Text>
          <Heading fontSize="xl" textTransform="capitalize">
            2
          </Heading>
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={2} gap={4} mt={4}>
        <Button> Delete </Button>
        <Button colorScheme="primary">Edit Details</Button>
      </SimpleGrid>
    </Flex>

    // <Flex
    //   w="100%"
    //   borderRadius={10}
    //   boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;"
    // >
    //   <Box w={110} bg="primary.50" borderLeftRadius={10} />

    //   <Box
    //     flex={1}
    //     w="100%"
    //     p={4}
    //     bg="white"
    //     borderRightRadius={10}
    //     zIndex={20}
    //   >
    //     <Flex justify="space-between" flexDir="column" w="100%" gap={16}>
    //       <Box>
    //         <Heading fontSize="2xl">{manager.name}</Heading>
    //         <Text color="gray"> {manager.phone} </Text>
    //       </Box>
    //       <HStack justify="space-between" w="100%">
    //         <Flex
    //           gap={2}
    //           bg="primary.50"
    //           p={4}
    //           borderRadius={10}
    //           align="center"
    //         >
    //           <Icon as={BsBuilding} boxSize={6} />
    //           <Heading fontSize="xl">3</Heading>
    //         </Flex>
    //         <IconButton
    //           aria-label="number of porperties"
    //           icon={<Icon as={BsArrowRight} transform="rotate(320deg)" />}
    //         />
    //       </HStack>
    //     </Flex>
    //   </Box>
    // </Flex>
  );
};

export default Temp;
