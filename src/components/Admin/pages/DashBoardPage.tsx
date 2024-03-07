import { Box, Flex, Heading, Highlight, Text } from "@chakra-ui/react";

const DashBoardPage = () => {
  return (
    <Flex flexDir="column" w="100%">
      <Box>
        <Heading>
          Hello,{" "}
          <Highlight query="Dayalan S" styles={{ color: "primary.500" }}>
            Dayalan S
          </Highlight>
        </Heading>
        <Text color="gray"> What a day to enter earning! </Text>
      </Box>
    </Flex>
  );
};

export default DashBoardPage;
