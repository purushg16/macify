import { Box, Button, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  icon: IconType;
  active?: boolean;
  route?: string;
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

const SmallButton = ({ active = false, icon, route }: Props) => {
  const navigate = useNavigate();

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
      fontSize={{ base: "small", md: "md" }}
    >
      <Icon
        onClick={() => navigate(route!)}
        cursor="pointer"
        as={icon}
        p={2}
        borderRadius={999}
        bg={active ? "primary.100" : "none"}
        transform={active ? "scale(1.1)" : "scale(1)"}
        pos="absolute"
        transition="all 0.7s"
        color={active ? "black" : "gray.400"}
        boxSize={{ base: 12, md: 14 }}
        boxShadow={active ? "rgb(38, 57, 77) 0px 20px 30px -10px;" : "none"}
      />
    </Box>
  );
};

export { NavButton, SmallButton };
