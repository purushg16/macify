import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const NavigatorWrapper = ({
  children,
  to: link,
}: {
  children: ReactNode;
  to: string;
}) => {
  const navigate = useNavigate();

  return <Box onClick={() => navigate(link)}> {children} </Box>;
};

export default NavigatorWrapper;
