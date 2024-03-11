import { Box, Heading, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

interface Props {
  label: string;
  color: string;
  icon: IconType;
  route: string;
}

const AddButton = ({ label, color, icon, route }: Props) => {
  const naviagate = useNavigate();
  return (
    <Box
      cursor="pointer"
      aspectRatio="4/3"
      p={4}
      pt={8}
      pr={12}
      borderRadius={20}
      boxShadow={`rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;`}
      border="1px solid"
      borderColor={`${color}.200`}
      bg={`${color}.50`}
      textAlign="left"
      display="flex"
      alignItems="end"
      onClick={() => naviagate(route)}
    >
      <Heading fontSize="2xl">
        <Icon as={icon} />
        <br />
        {label.split(" ")[0]}
        <br /> {label.split(" ")[1]}
      </Heading>
    </Box>
  );
};

export default AddButton;
