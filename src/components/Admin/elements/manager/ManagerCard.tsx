import {
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Manager from "../../../entities/manager";
import Title from "../Title";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
interface ManagerCardProps {
  manager: Manager;
}

const Temp = ({ manager }: ManagerCardProps) => {
  return (
    <Flex
      gap={4}
      flexDir="column"
      p={4}
      borderRadius={20}
      border="1px solid"
      borderColor="gray.100"
    >
      <Flex>
        <Title
          size="2xl"
          heading={manager.name}
          subtitle="Male"
          substitleSize="xs"
          align="left"
        />
        <Spacer />
        <HStack>
          <IconButton
            sx={{ borderRadius: "10px !important" }}
            aria-label="del-btn"
            icon={<Icon as={MdDeleteOutline} />}
            border="1px solid"
            borderColor="gray.50"
            bg="red.200"
            _hover={{ bg: "red.300" }}
          />
          <IconButton
            sx={{ borderRadius: "10px !important" }}
            aria-label="del-btn"
            icon={<Icon as={CiEdit} />}
            border="1px solid"
            borderColor="gray.50"
            bg="primary.200"
            _hover={{ bg: "primary.300" }}
          />
        </HStack>
      </Flex>
      <Flex gap={4} pt={8} borderTop="1px solid" borderColor="gray.100">
        <Flex
          flexDir="column"
          justify="end"
          p={4}
          bg="#f4f4f4"
          borderRadius={10}
          flex={1}
        >
          <Heading fontSize="lg">
            {manager.phone} <br />
            {manager.email}
          </Heading>
          <Text fontSize="xs" color="gray">
            Contact & <br />
            EMail
          </Text>
        </Flex>
        <Flex
          w="min-content"
          flexDir="column"
          justify="end"
          p={4}
          bg="#f4f4f4"
          borderRadius={10}
        >
          <Heading fontSize="3xl" textTransform="capitalize">
            02
          </Heading>
          <Text fontSize="xs" color="gray">
            Properties <br />
            Managing
          </Text>
        </Flex>
      </Flex>
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
