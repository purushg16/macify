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
  isDisabled?: boolean;
}

const LabelInput = ({
  label,
  value,
  onChange,
  icon,
  number = false,
  isDisabled = false,
}: Props) => {
  return (
    <FormControl>
      <FormLabel fontSize="xs" textTransform="capitalize" mb={0} ml={2}>
        {label}
      </FormLabel>
      <InputGroup>
        <Input
          textTransform="capitalize"
          _placeholder={{ textTransform: "capitalize" }}
          type={number ? "number" : "text"}
          bg="gray.100"
          placeholder={label}
          isDisabled={isDisabled}
          value={value}
          onChange={(e) => {
            !isDisabled && onChange(e.target.value);
          }}
        />
        <InputRightElement>
          <Icon as={icon} />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default LabelInput;
