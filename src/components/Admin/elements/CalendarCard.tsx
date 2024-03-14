import {
  Box,
  Flex,
  HStack,
  Heading,
  Highlight,
  Icon,
  Text,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  subtitle: string;
  icon: IconType;
  route: string;
  number: string;
}

const CalendarCard = ({ title, subtitle, number, route }: Props) => {
  const navigate = useNavigate();
  return (
    <Flex
      cursor="pointer"
      flexDir="column"
      p={4}
      px={6}
      gap={4}
      borderRadius={15}
      onClick={() => navigate(`${route}`)}
      bg="#f2f2f2"
    >
      <Box w="max-content" borderRadius={10}>
        <Heading color="gray" fontSize="sm">
          <Highlight
            query={"0"}
            styles={{
              color: "gray",
              borderBottom: "3px solid",
              borderColor: "primary.500",
            }}
            children={"0" + number}
          />
        </Heading>
        {/* <Icon as={icon} boxSize={8} /> */}
      </Box>

      <HStack justify="space-between">
        <Box>
          <Heading fontSize="xl" mb={2}>
            {title}
          </Heading>
          <Text color="gray" maxW={"90%"} fontSize="xs">
            {subtitle}
          </Text>
        </Box>
        <Box p={4} lineHeight="normal" bg="primary.100" borderRadius={10}>
          <Icon as={BsArrowRight} boxSize={4} transform="rotate(320deg)" />
        </Box>
      </HStack>
    </Flex>
  );
};

export default CalendarCard;
