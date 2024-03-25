import { Flex, HStack, Heading, Spacer } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  PropertySelector: ReactNode;
  RoomSelector?: ReactNode;
  BedSelector?: ReactNode;
  DatePicker?: ReactNode;
  title: string;
}

const SingleCalendarButtonStack = ({
  title,
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

      <Flex gap={RoomSelector ? 4 : 0} flexDir="column">
        {PropertySelector}
        <HStack gap={4}>
          {RoomSelector}
          {BedSelector}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default SingleCalendarButtonStack;
