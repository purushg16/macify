import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface AdminButtonProps {
  text: string;
  link: string;
  isActive: boolean;
}

const AdminButton = ({ text, link, isActive }: AdminButtonProps) => {
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

export { AdminButton };
