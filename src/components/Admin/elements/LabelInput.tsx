import {
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  icon: IconType;
  number?: boolean;
}

const LabelInput = ({
  label,
  value,
  onChange,
  icon,
  number = false,
}: Props) => {
  return (
    <FormControl>
      <FormLabel fontSize="xs" textTransform="capitalize" mb={0} ml={2}>
        {label}
      </FormLabel>
      <InputGroup>
        <Input
          type={number ? "number" : "text"}
          bg="gray.100"
          placeholder={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <InputRightElement>
          <Icon as={icon} />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default LabelInput;
