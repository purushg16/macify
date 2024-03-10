import {
  Box,
  Divider,
  Flex,
  Heading,
  Highlight,
  Image,
  Text,
} from "@chakra-ui/react";
import OptionsGrid from "../elements/Dashboard/OptionsGrid";
import CurrentHostingGrid from "../elements/Dashboard/CurrentHostingGrid";
import { useState } from "react";
import UpcomingCheckInGrid from "../elements/Dashboard/UpcomingCheckInGrid";
import UpcomingCheckOutGrid from "../elements/Dashboard/UpcomingCheckOuts";
import hello from "../../../assets/hello.png";

const DashBoardPage = () => {
  const [tab, setTab] = useState(0);
  const handleTabChange = (t: number) => setTab(t);

  return (
    <Flex flexDir="column" w="100%" gap={4}>
      <Flex gap={4} align="center">
        <Image src={hello} alt="hello" w={50} />
        <Box>
          <Heading>
            Hello{" "}
            <Highlight query="Dayalan S" styles={{ color: "primary.500" }}>
              Dayalan S
            </Highlight>
          </Heading>
          <Text color="gray"> What a day to enter earning! </Text>
        </Box>
      </Flex>

      <OptionsGrid handleTabChange={handleTabChange} />

      <Divider />

      {tab === 0 && <CurrentHostingGrid />}
      {tab === 1 && <UpcomingCheckInGrid />}
      {tab === 2 && <UpcomingCheckOutGrid />}
    </Flex>
  );
};

export default DashBoardPage;
