import { Box, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  label: string;
  value: string | undefined;
  icon?: IconType;
}

const EditPropertyValue = ({ label, value }: Props) => {
  return (
    <Box w="max-content">
      <Text mb={2} fontSize="sm" color="gray">
        {label}
      </Text>
      <Box p={2} px={4} borderRadius={10} bg="white" fontSize="lg">
        {value}
      </Box>
    </Box>
  );
};

export default EditPropertyValue;
