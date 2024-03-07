import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  subtitle: string;
  icon: IconType;
  route: string;
}

const CalendarCard = ({ title, subtitle, icon, route }: Props) => {
  const navigate = useNavigate();
  return (
    <Flex
      cursor="pointer"
      h={200}
      flexDir="column"
      justifyContent="space-between"
      p={4}
      borderRadius={10}
      bg="primary.50"
      onClick={() => navigate(`${route}`)}
    >
      <Box textAlign="right">
        <Icon as={icon} boxSize={8} />
      </Box>
      <Box textAlign="left">
        <Heading> {title} </Heading>
        <Text color="gray"> {subtitle} </Text>
      </Box>
    </Flex>
  );
};

export default CalendarCard;
