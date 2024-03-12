import { Box, Flex, Heading, Highlight, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
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
      pos="relative"
      p={8}
      gap={12}
      borderRadius={15}
      onClick={() => navigate(`${route}`)}
      // bg="#f1f1f1"
      border="1px solid"
      borderColor="gray.100"
      overflow="hidden"
    >
      <Box w="max-content" borderRadius={10}>
        <Heading color="gray">
          <Highlight
            query={"0"}
            styles={{
              color: "gray",
              borderBottom: "3px solid",
              borderColor: "red.600",
            }}
            children={"0" + number}
          />
        </Heading>
        {/* <Icon as={icon} boxSize={8} /> */}
      </Box>

      <Box>
        <Heading> {title} </Heading>
        <Text color="gray"> {subtitle} </Text>
      </Box>

      <Box
        bg="red.600"
        p={4}
        borderTopRadius={20}
        pos="absolute"
        w="95%"
        left="2.5%"
        bottom={-7}
      />
    </Flex>
  );
};

export default CalendarCard;
