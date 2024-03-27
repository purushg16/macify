import {
  Box,
  Flex,
  Heading,
  Highlight,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaRunning } from "react-icons/fa";
import { MdChecklistRtl, MdEmojiFlags } from "react-icons/md";
import { useGetProfile } from "../../../hooks/useAdmin";
import AnimateMove from "../../../motions/Move";
import CurrentHostingGrid from "../../elements/Dashboard/CurrentHostingGrid";
import HostingButton from "../../elements/Dashboard/HostingButton";
import TodayBanner from "../../elements/Dashboard/TodayBanner";
import UpcomingCheckInGrid from "../../elements/Dashboard/UpcomingCheckInGrid";
import UpcomingCheckOutGrid from "../../elements/Dashboard/UpcomingCheckOuts";
import LoadingIndicator from "../../elements/LoadingIndicator";

const ManagerDashBoardPage = () => {
  const [tab, setTab] = useState(0);
  const handleTabChange = (t: number) => setTab(t);
  const { data: user, isLoading } = useGetProfile();

  return (
    <Flex flexDir="column" w="100%" gap={8}>
      <AnimateMove delay={0.2}>
        <Flex gap={4} align="start">
          <Box>
            Hello,
            <span>{isLoading && <LoadingIndicator text="user" inline />}</span>
            <Heading>
              {user && user.firstName && user.lastName && (
                <Highlight query="Dayalan S" styles={{ color: "primary.500" }}>
                  {user.firstName + " " + user.lastName + " 👋"}
                </Highlight>
              )}
            </Heading>
            <Text color="gray" fontSize="xs">
              What a day to enter earning!
            </Text>
          </Box>
        </Flex>
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <TodayBanner />
      </AnimateMove>

      <AnimateMove delay={0.8}>
        <Flex flexDir="column" bg="#f2f2f2" borderRadius={20} p={4} gap={4}>
          <Text fontSize="md" mb={8}>
            What's Happening,
          </Text>
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
              <CurrentHostingGrid manager />
            </AnimateMove>
          )}
          {tab === 1 && (
            <AnimateMove>
              <UpcomingCheckInGrid manager />
            </AnimateMove>
          )}
          {tab === 2 && (
            <AnimateMove>
              <UpcomingCheckOutGrid manager />
            </AnimateMove>
          )}
        </Flex>
      </AnimateMove>
    </Flex>
  );
};

export default ManagerDashBoardPage;
