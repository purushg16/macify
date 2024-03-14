import { Box, Divider, Flex, Heading, Highlight, Text } from "@chakra-ui/react";
import OptionsGrid from "../elements/Dashboard/OptionsGrid";
import CurrentHostingGrid from "../elements/Dashboard/CurrentHostingGrid";
import { useState } from "react";
import UpcomingCheckInGrid from "../elements/Dashboard/UpcomingCheckInGrid";
import UpcomingCheckOutGrid from "../elements/Dashboard/UpcomingCheckOuts";
import Title from "../elements/Title";
import AddStack from "../elements/Dashboard/AddStack";
import { Link } from "react-router-dom";
import AddSlider from "../elements/Dashboard/AddSlider";

const DashBoardPage = () => {
  const [tab, setTab] = useState(0);
  const handleTabChange = (t: number) => setTab(t);

  return (
    <Flex flexDir="column" w="100%" gap={8}>
      <Flex gap={4} align="start">
        <Box>
          Hello,
          <Heading>
            <Highlight query="Dayalan S" styles={{ color: "primary.500" }}>
              Dayalan S 👋
            </Highlight>
          </Heading>
          <Text color="gray" fontSize="xs">
            What a day to enter earning!
          </Text>
        </Box>
      </Flex>

      <Flex flexDir="column" bg="#f6f6f6" borderRadius={20} p={4} gap={12}>
        <Text fontSize="md"> New Beginning, </Text>
        <AddSlider />
      </Flex>

      {/* <Box pb={4} borderBottom="1px solid" borderColor="gray.50">
        <Title heading="Manage on the go!" subtitle="" align="left" />
        <AddStack />
      </Box>

      <Box>
        <Title heading="What is happening?" subtitle="" align="left" />
        <Box
          p={4}
          border="1px dashed"
          borderColor="gray.100"
          borderRadius={10}
          mt={4}
        >
          <OptionsGrid handleTabChange={handleTabChange} currentTab={tab} />
          <Text
            fontSize="xs"
            textAlign="right"
            textDecor="underline"
            mt={4}
            mb={2}
          >
            <Link to="calendar"> See All </Link>
          </Text>
          <Divider mb={4} />

          {tab === 0 && <CurrentHostingGrid />}
          {tab === 1 && <UpcomingCheckInGrid />}
          {tab === 2 && <UpcomingCheckOutGrid />}
        </Box>
      </Box> */}
    </Flex>
  );
};

export default DashBoardPage;
