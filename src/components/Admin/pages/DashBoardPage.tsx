import { Box, Divider, Flex, Heading, Highlight, Text } from "@chakra-ui/react";
import OptionsGrid from "../elements/Dashboard/OptionsGrid";
import CurrentHostingGrid from "../elements/Dashboard/CurrentHostingGrid";
import { useState } from "react";

const DashBoardPage = () => {
  const [tab, setTab] = useState(0);
  const handleTabChange = (t: number) => setTab(t);

  return (
    <Flex flexDir="column" w="100%" gap={4}>
      <Box>
        <Heading>
          Hello,{" "}
          <Highlight query="Dayalan S" styles={{ color: "primary.500" }}>
            Dayalan S
          </Highlight>
        </Heading>
        <Text color="gray"> What a day to enter earning! </Text>
      </Box>

      <OptionsGrid handleTabChange={handleTabChange} />

      <Divider />

      {tab === 0 && <CurrentHostingGrid />}
    </Flex>
  );
};

export default DashBoardPage;
