import {
  Input,
  Switch,
  FormControl,
  FormLabel,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import useAddPropertyRoomStore from "../../../store/AddProperty/addPropertyRoomStore";

const SerializeInput = () => {
  const [startingNumber, setStartingNumber] = useState<number>();
  const [serialize, isSerialized] = useState<boolean>(false);

  const performSerialize = useAddPropertyRoomStore((s) => s.serialize);

  const doSerialize = () => {
    if (!serialize && !!startingNumber) performSerialize(startingNumber);
    isSerialized(!serialize);
  };

  return (
    <FormControl px={4} w="90%" mx="auto">
      <FormLabel fontSize="xs" m={0} ml={2}>
        Serialize Room Numbers
      </FormLabel>
      <InputGroup>
        <Input
          type="number"
          placeholder="Starting Room No."
          bg="gray.50"
          value={startingNumber || ""}
          onChange={(e) => {
            isSerialized(false);
            setStartingNumber(parseInt(e.target.value || ""));
          }}
          flex={1}
        />
        <InputRightElement bg="none" right={2}>
          <Switch
            colorScheme="primary"
            isDisabled={!startingNumber}
            isChecked={serialize}
            onChange={doSerialize}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default SerializeInput;
