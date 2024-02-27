import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Box, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

interface AdminButtonProps {
  text: string;
  link: string;
  isActive: boolean;
}

const LiteNavigationButton = ({ text, link, isActive }: AdminButtonProps) => {
  return (
    <NavLink to={link}>
      <Button
        fontSize="xl"
        variant="text"
        px={0}
        opacity={isActive ? 1 : 0.5}
        transition="all 0.5s"
      >
        {text}
      </Button>
    </NavLink>
  );
};

export { LiteNavigationButton };

interface Props {
  title: string;
  icon: IconType;
  active?: boolean;
  route?: string;
  admin?: boolean;
}

const SmallButton = ({
  title,
  active = false,
  icon,
  route,
  admin = true,
}: Props) => {
  const navigate = useNavigate();

  return (
    <Box
      borderRadius={999}
      gap={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={2}
      transition="all 0.7s"
      fontSize={{ base: "small", md: "md" }}
      cursor="pointer"
      onClick={() => navigate(route!)}
    >
      <Icon
        as={icon}
        p={2}
        borderRadius={999}
        bg={active ? "primary.100" : "none"}
        transform={active ? "scale(1.1)" : "scale(1)"}
        transition="all 0.7s"
        color={active ? "black" : "gray.400"}
        boxSize={{ base: 12, md: 14 }}
        boxShadow={active ? "rgb(38, 57, 77) 0px 20px 30px -10px;" : "none"}
      />
      {!admin && <Box>{title}</Box>}
    </Box>
  );
};

export { SmallButton };
