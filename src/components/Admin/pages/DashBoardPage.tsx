import {
  Box,
  Flex,
  Heading,
  Highlight,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import CurrentHostingGrid from "../elements/Dashboard/CurrentHostingGrid";
import UpcomingCheckInGrid from "../elements/Dashboard/UpcomingCheckInGrid";
import UpcomingCheckOutGrid from "../elements/Dashboard/UpcomingCheckOuts";
// import { Link } from "react-router-dom";
import AddSlider from "../elements/Dashboard/AddSlider";
import { MdChecklistRtl, MdEmojiFlags } from "react-icons/md";
import HostingButton from "../elements/Dashboard/HostingButton";
import { FaRunning } from "react-icons/fa";
import AnimateMove from "../../motions/Move";

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

      <Flex flexDir="column" bg="#f2f2f2" borderRadius={20} p={4} gap={12}>
        <Text fontSize="md"> New Beginning, </Text>
        <AddSlider />
      </Flex>

      <Flex flexDir="column" bg="#f2f2f2" borderRadius={20} p={4} gap={12}>
        <Text fontSize="md"> What's Happening, </Text>
        <SimpleGrid columns={3} justifyContent="space-between" spacing={2}>
          <HostingButton
            active={tab == 0}
            title="Current Hosting"
            icon={MdEmojiFlags}
            onclick={() => handleTabChange(0)}
          />
          <HostingButton
            active={tab == 1}
            title="Upcoming CheckIn"
            icon={MdChecklistRtl}
            onclick={() => handleTabChange(1)}
          />
          <HostingButton
            active={tab == 2}
            title="Upcoming CheckOut"
            icon={FaRunning}
            onclick={() => handleTabChange(2)}
          />
        </SimpleGrid>

        {tab === 0 && (
          <AnimateMove>
            <CurrentHostingGrid />
          </AnimateMove>
        )}
        {tab === 1 && (
          <AnimateMove>
            <UpcomingCheckInGrid />
          </AnimateMove>
        )}
        {tab === 2 && (
          <AnimateMove>
            <UpcomingCheckOutGrid />
          </AnimateMove>
        )}
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

          
        </Box>
      </Box> */}
    </Flex>
  );
};

export default DashBoardPage;
