import { Flex, HStack, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  PropertySelector: ReactNode;
  RoomSelector?: ReactNode;
  BedSelector?: ReactNode;
}

const SingleCalendarButtonStack = ({
  PropertySelector,
  RoomSelector,
  BedSelector,
}: Props) => {
  return (
    <Flex gap={8} flexDir="column" p={4} borderRadius={20} bg="#f4f4f4">
      <Flex align="start">
        <Heading fontSize="md"> Choose Property </Heading>
      </Flex>

      <Flex gap={4} flexDir="column">
        {PropertySelector}
        <HStack gap={4}>
          {RoomSelector}
          {BedSelector}
        </HStack>

        {/* <Menu>
          <MenuButton
            w="max-content"
            as={Button}
            rightIcon={<Icon as={IoChevronDownCircleOutline} />}
          >
            Select Property
          </MenuButton>
        </Menu>

        <HStack gap={4}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<Icon as={IoChevronDownCircleOutline} />}
            >
              Select Room
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<Icon as={IoChevronDownCircleOutline} />}
            >
              Select Bed
            </MenuButton>
          </Menu>
        </HStack> */}
      </Flex>
    </Flex>
  );
};

export default SingleCalendarButtonStack;
