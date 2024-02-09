import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  text: string | ReactNode;
  action?: () => void;
  primary?: boolean;
}

const Btn = ({ text, action, primary }: Props) => {
  return (
    <Button
      px={4}
      colorScheme={primary ? "primary" : "gray"}
      variant="solid"
      onClick={action}
    >
      {text}
    </Button>
  );
};

export default Btn;
