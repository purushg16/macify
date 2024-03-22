import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  label: string;
  value: string | undefined;
  onchange: (value: string | undefined) => void;
  icon?: IconType;
}

const EditPropertyValue = ({ icon, label, value, onchange }: Props) => {
  return (
    <Box w="max-content">
      <Text mb={2} fontSize="sm" color="gray">
        {label}
      </Text>
      <InputGroup>
        <Input
          p={2}
          px={4}
          borderRadius={10}
          bg="white"
          fontSize="lg"
          value={value}
          onChange={(e) => onchange(e.target.value)}
        />
        <InputRightElement>
          {" "}
          <Icon as={icon} />{" "}
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default EditPropertyValue;
