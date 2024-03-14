import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  SimpleGrid,
  Spacer,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { BsArrowRightCircle } from "react-icons/bs";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import {
  useAdminUpcomingCheckIns,
  useAdminUpcomingCheckOuts,
} from "../../../hooks/useDashboard";

const TodayBanner = () => {
  const { data: ciData, isLoading: CIisLoading } = useAdminUpcomingCheckIns();
  const { data: coData, isLoading: COisLoading } = useAdminUpcomingCheckOuts();

  return (
    <Flex flexDir="column" p={4} borderRadius={20} bg="#f4f4f4">
      <Flex
        pb={4}
        borderBottom="1px solid"
        borderColor="gray.100"
        alignItems="end"
      >
        <Box>
          <Text fontSize="xs"> today, </Text>
          <Heading fontSize="xl"> Mar 26, 2024 </Heading>
        </Box>
        <Spacer />
        <IconButton
          size="sm"
          aria-label="cal-btn"
          icon={<Icon as={BsArrowRightCircle} />}
          colorScheme="primary"
        />
      </Flex>

      <SimpleGrid columns={2} pt={8} spacing={4}>
        <Flex gap={4} align="center" bg="white" p={4} borderRadius={20}>
          <Flex p={2} bg="primary.100" borderRadius="100%" lineHeight="normal">
            <Icon as={FaCaretDown} boxSize={6} color="green" />
          </Flex>
          <Box>
            <Heading fontSize="lg">
              {!CIisLoading ? ciData?.data.length : <Spinner />}
            </Heading>
            <Text fontSize="xs"> Check Ins </Text>
          </Box>
        </Flex>

        <Flex gap={4} align="center" bg="white" p={4} borderRadius={20}>
          <Flex p={2} bg="red.100" borderRadius="100%" lineHeight="normal">
            <Icon as={FaCaretUp} boxSize={6} color="red" />
          </Flex>
          <Box>
            <Heading fontSize="lg">
              {!COisLoading ? coData?.data.length : <Spinner />}
            </Heading>
            <Text fontSize="xs"> Check Outs </Text>
          </Box>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default TodayBanner;
