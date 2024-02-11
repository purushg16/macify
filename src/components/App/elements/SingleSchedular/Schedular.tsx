import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import DateGenerator from "../../../generator/scheduleTimeline";
import DateBlock from "./DateBlock";

interface Props {
  propertyName: string;
  propertyNumber?: string;
}

const Schedular = ({ propertyName, propertyNumber }: Props) => {
  const dateGenerator = DateGenerator({ months: 6 });

  return (
    <Box borderTop="1px solid" borderColor="gray.200" bg="gray.50">
      <Text
        py={2}
        fontSize="md"
        mb={4}
        pl={2}
        borderLeft="5px solid #7edf9a"
        bg="gray.100"
      >
        {propertyName} - {propertyNumber && `  Room ${propertyNumber}`}
      </Text>

      <Flex
        w="100%"
        overflowX="auto"
        sx={{ "&::-webkit-scrollbar": { height: 0 } }}
      >
        {dateGenerator.map((date) => (
          <DateBlock
            date={date.toDateString().split(" ").slice(1, 3).join(" ")}
          />
        ))}
      </Flex>
      <Divider my={5} />
    </Box>
  );
};

export default Schedular;
