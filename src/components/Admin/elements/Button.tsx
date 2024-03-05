import { Button, IconButton, Image } from "@chakra-ui/react";
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

interface NavProps {
  png: string;
  route?: string;
}

const NavButton = ({ png, route }: NavProps) => {
  const navigate = useNavigate();

  return (
    <Box borderRadius={99} onClick={() => navigate(route!)} p={4}>
      <Image w={8} src={png} />
    </Box>
  );
};

export { NavButton };

interface Props {
  title: string;
  icon: IconType;
  active?: boolean;
  route?: string;
  admin?: boolean;
}

const SmallButton = ({ active = false, icon, route }: Props) => {
  const navigate = useNavigate();

  return (
    <Box borderRadius="100%" onClick={() => navigate(route!)}>
      <IconButton
        p={6}
        aria-label="nav-btn"
        icon={
          <Icon
            as={icon}
            boxSize={6}
            color={active ? "black" : "gray.300"}
            transition="all 0.7s"
          />
        }
        boxSize={8}
        transition="all 0.7s"
        bg={active ? "white" : "none"}
        _hover={{ bg: "white" }}
        boxShadow={active ? "rgba(0, 0, 0, 0.24) 0px 3px 8px;" : "none"}
      />
    </Box>
  );
};

export { SmallButton };
