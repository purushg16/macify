import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface AdminButtonProps {
  text: string;
  link: string;
}

const AdminButton = ({ text, link }: AdminButtonProps) => {
  return (
    <NavLink
      to={link}
      style={({ isActive, isPending, isTransitioning }) => {
        return {
          opacity: isActive ? 1 : 0.5,
          fontWeight: isActive ? "bold" : "",
          color: isPending ? "red" : "black",
          viewTransitionName: isTransitioning ? "slide" : "",
          transition: "all 0.7s",
        };
      }}
    >
      <Button fontSize="xl" variant="text" px={0}>
        {text}
      </Button>
    </NavLink>
  );
};

export { AdminButton };
