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
      p={8}
      gap={12}
      borderRadius={15}
      onClick={() => navigate(`${route}`)}
      bg="#f2f2f2"
    >
      <Box w="max-content" borderRadius={10}>
        <Heading color="gray">
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
          <Heading> {title} </Heading>
          <Text color="gray" maxW={"90%"}>
            {subtitle}
          </Text>
        </Box>
        <Box p={2} px={4} bg="primary.100" borderRadius={20}>
          <Icon as={BsArrowRight} boxSize={8} transform="rotate(320deg)" />
        </Box>
      </HStack>
    </Flex>
  );
};

export default CalendarCard;
