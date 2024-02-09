import { Box, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  icon: IconType;
  active?: boolean;
}

const TabCard = ({ title, icon, active = false }: Props) => {
  return (
    <Box
      textAlign="center"
      cursor="pointer"
      border={active ? "none" : "1px solid"}
      borderColor="gray.200"
      bg={active ? "white" : "none"}
      p={4}
      borderRadius={20}
      transition="all 0.7s"
      _hover={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px;",
      }}
    >
      <Box m="auto" p={2} w="max-content" lineHeight="100%">
        <Icon as={icon} boxSize={35} />
      </Box>
      <Text fontSize="lg"> {title} </Text>
    </Box>
  );
};

export default TabCard;
