import { Flex, HStack, Heading, Spacer, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  PropertySelector: ReactNode;
  RoomSelector?: ReactNode;
  BedSelector?: ReactNode;
  DatePicker?: ReactNode;
  title: string;
  same?: boolean;
}

const SingleCalendarButtonStack = ({
  title,
  same = false,
  PropertySelector,
  RoomSelector,
  BedSelector,
  DatePicker,
}: Props) => {
  return (
    <Flex gap={8} flexDir="column" p={4} borderRadius={20} bg="#f4f4f4">
      <Flex align="start">
        <Heading fontSize="md"> Choose {title} </Heading>
        <Spacer />
        {DatePicker && DatePicker}
      </Flex>

      {same && (
        <VStack gap={4} align="start">
          <HStack gap={4}>
            {PropertySelector}
            {RoomSelector}
          </HStack>
          {BedSelector}
        </VStack>
      )}

      {!same && (
        // <Flex gap={RoomSelector ? 4 : 0} flexDir="column">
        <HStack gap={4}>
          {PropertySelector}
          {RoomSelector}
          {BedSelector}
        </HStack>
        // </Flex>
      )}
    </Flex>
  );
};

export default SingleCalendarButtonStack;
