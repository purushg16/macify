import {
  Box,
  Divider,
  Flex,
  Heading,
  Highlight,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaRunning } from "react-icons/fa";
import { MdChecklistRtl, MdEmojiFlags } from "react-icons/md";
import { useGetProfile } from "../../hooks/useAdmin";
import AnimateMove from "../../motions/Move";
import CurrentHostingGrid from "../elements/Dashboard/CurrentHostingGrid";
import HostingButton from "../elements/Dashboard/HostingButton";
import TodayBanner from "../elements/Dashboard/TodayBanner";
import UpcomingCheckInGrid from "../elements/Dashboard/UpcomingCheckInGrid";
import UpcomingCheckOutGrid from "../elements/Dashboard/UpcomingCheckOuts";
import LoadingIndicator from "../elements/LoadingIndicator";
import MinimalAddButton from "../elements/Dashboard/MinimalAddButton";
import property from "../../../assets/app/Dashboard/property.png";
import manager from "../../../assets/app/Dashboard/manager.png";
import booking from "../../../assets/app/Dashboard/schedule.png";

import { FaRegBuilding } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";

const DashBoardPage = () => {
  const [tab, setTab] = useState(0);
  const handleTabChange = (t: number) => setTab(t);
  const { data: user, isLoading } = useGetProfile();

  return (
    <Flex flexDir="column" w="100%" gap={8}>
      <AnimateMove delay={0.2} noWidth>
        <VStack
          w="100%"
          align="start"
          gap={0}
          bg="primary.500"
          borderRadius={20}
          pb={4}
          overflowX="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "0", // Hide scrollbar for Chrome, Safari, and Opera
            },
            scrollbarWidth: "none", // Hide scrollbar for Firefox
          }}
        >
          <Flex w="100%" gap={4} p={4} align="start" justify="space-between">
            <Box color="secondary.50" fontSize="xs">
              Welcome Back,
              <Heading fontSize="2xl" color="secondary.50">
                {isLoading && <LoadingIndicator text="user" />}
                {user && user.firstName && user.lastName && (
                  <Highlight
                    query="Dayalan S"
                    styles={{ color: "primary.500" }}
                  >
                    {user.firstName + " " + user.lastName + " 👋"}
                  </Highlight>
                )}
              </Heading>
            </Box>
          </Flex>
          <Divider borderColor="primary.900" w="95%" m="auto" />

          <Box w="100%" pt={8}>
            <Flex
              gap={4}
              flexWrap="nowrap"
              overflowX="auto"
              px={4}
              css={{
                "&::-webkit-scrollbar": {
                  width: "0", // Hide scrollbar for Chrome, Safari, and Opera
                },
                scrollbarWidth: "none", // Hide scrollbar for Firefox
              }}
            >
              <MinimalAddButton
                bg="#bcd3c7"
                img={property}
                title="Property"
                route="properties/add"
                icon={FaRegBuilding}
              />
              <MinimalAddButton
                bg="#b8d7e4"
                img={booking}
                title="Booking"
                route="properties"
                icon={FaRegCalendarCheck}
              />
              <MinimalAddButton
                bg="#b9b8e4"
                img={manager}
                title="Manager"
                route="manager"
                icon={IoPersonAdd}
              />
            </Flex>
          </Box>
        </VStack>
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <TodayBanner />
      </AnimateMove>

      {/* <AnimateMove delay={0.6}>
        <Flex flexDir="column" bg="#f2f2f2" borderRadius={20} p={4} gap={12}>
          <Text fontSize="md"> New Beginning, </Text>
          <AddSlider />
        </Flex>
      </AnimateMove> */}

      <AnimateMove delay={0.8}>
        <Flex flexDir="column" bg="#f2f2f2" borderRadius={20} p={4} gap={4}>
          <Text fontSize="md" mb={8}>
            {" "}
            What's Happening,{" "}
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
      </AnimateMove>
    </Flex>
  );
};

export default DashBoardPage;
