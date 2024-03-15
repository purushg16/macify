import { Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  fetchButton: ReactNode;
  PropertySelector: ReactNode;
  RoomSelector?: ReactNode;
  BedSelector?: ReactNode;
}

const SingleCalendarButtonStack = ({
  fetchButton,
  PropertySelector,
  RoomSelector,
  BedSelector,
}: Props) => {
  return (
    <Flex gap={12} flexDir="column" p={4} borderRadius={20} bg="#f4f4f4">
      <Flex align="start">
        <Text> Choose Property </Text>
        <Spacer />
        {fetchButton}
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
