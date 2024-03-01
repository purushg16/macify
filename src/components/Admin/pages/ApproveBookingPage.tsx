import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Title from "../elements/Title";
import { BsClockFill } from "react-icons/bs";
import { timeList } from "../../data/timeList";
import GuestCard from "../elements/ApproveBooking/GuestCard";

const ApproveBookingPage = () => {
  return (
    <Flex flexDir="column" gap={8}>
      <Title
        heading="Sunny's Villa"
        subtitle="Approve after assigning rooms"
        align="left"
      />
      <Divider borderColor="gray.100" maxW="7em" m="auto" />

      <Box>
        <Text mb={4}>Checking Time Details</Text>

        <VStack align="start" gap={4}>
          <InputGroup maxW="70%" zIndex={4}>
            <Input bg="gray.50" placeholder="CheckIn Time" size="md" />
            <InputRightElement cursor="pointer">
              <Menu placement="top">
                <MenuButton
                  as={Button}
                  bg="none"
                  p={0}
                  _hover={{ bg: "none" }}
                  _active={{ bg: "none", outline: "none", border: "none" }}
                >
                  <Icon as={BsClockFill} />
                </MenuButton>
                <MenuList borderRadius={20} p={2} maxH={200} overflowY="scroll">
                  {timeList.map((time, i) => (
                    <MenuItem key={i}>{time}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </InputRightElement>
          </InputGroup>

          <InputGroup maxW="70%" zIndex={3}>
            <Input bg="gray.50" placeholder="CheckOut Time" size="md" />
            <InputRightElement cursor="pointer">
              <Menu placement="top">
                <MenuButton
                  as={Button}
                  bg="none"
                  p={0}
                  _hover={{ bg: "none" }}
                  _active={{ bg: "none", outline: "none", border: "none" }}
                >
                  <Icon as={BsClockFill} />
                </MenuButton>
                <MenuList borderRadius={20} p={2} maxH={200} overflowY="scroll">
                  {timeList.map((time, i) => (
                    <MenuItem key={i}>{time}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </InputRightElement>
          </InputGroup>
        </VStack>
      </Box>

      <Divider borderColor="gray.100" maxW="7em" m="auto" />

      <Box>
        <Text mb={4}>Guest Details</Text>

        <HStack mb={2}>
          <Button size="sm" colorScheme="primary">
            Select Room
          </Button>
          <Button size="sm" colorScheme="primary">
            Select Bed
          </Button>
        </HStack>

        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 4 }}
          p={4}
          spacing={4}
          borderRadius={10}
          border="1px dashed"
          borderColor="gray.100"
        >
          <GuestCard />
          <GuestCard />
        </SimpleGrid>
      </Box>

      <Box mt={4}>
        <Title
          heading="Approve Booking"
          subtitle="Click ‘Approve’ to confirm booking"
        />

        <HStack justify="center" mt={4}>
          <Button> Cancel </Button>
          <Button colorScheme="primary"> Approve </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default ApproveBookingPage;
