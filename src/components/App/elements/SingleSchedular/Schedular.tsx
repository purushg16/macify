import { Box, Divider, Flex } from "@chakra-ui/react";
import DateBlock from "./DateBlock";
import DateGenerator from "../../../generator/scheduleTimeline";

const Schedular = () => {
  const dateGenerator = DateGenerator({ months: 6 });

  return (
    <Box>
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
