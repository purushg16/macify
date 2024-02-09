import { Box, Button, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  icon: IconType;
  active?: boolean;
}

const NavButton = ({ title, active = false, icon }: Props) => {
  return (
    <Button
      variant={!active ? "outline" : "solid"}
      leftIcon={<Icon as={icon} />}
    >
      {title}
    </Button>
  );
};

const SmallButton = ({ active = false, icon }: Props) => {
  return (
    <Box
      borderRadius={999}
      gap={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={4}
      px={2}
      transition="all 0.7s"
      color={active ? "white" : "gray"}
      fontSize={{ base: "small", md: "md" }}
    >
      <Icon
        as={icon}
        p={2}
        borderRadius={999}
        bg={active ? "black" : "gray.100"}
        transform={active ? "scale(1.1)" : "scale(1)"}
        pos="absolute"
        transition="all 0.7s"
        color={active ? "white" : "gray"}
        boxSize={{ base: 10, md: 8 }}
        boxShadow={active ? "rgb(38, 57, 77) 0px 20px 30px -10px;" : "none"}
      />
    </Box>
  );
};

export { NavButton, SmallButton };
