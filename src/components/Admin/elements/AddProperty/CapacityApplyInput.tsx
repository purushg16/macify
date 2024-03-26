import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Switch,
} from "@chakra-ui/react";
import { useState } from "react";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";
import useAddPropertyRoomStore from "../../../store/AddProperty/addPropertyRoomStore";

const CapacityApplyInput = () => {
  const [capacity, setCapacity] = useState<number>();
  const [applyAll, isAppliedAll] = useState<boolean>(false);

  const propertyType = useAddPropertyStore((s) => s.propertyType);
  const capacityApplyAll = useAddPropertyRoomStore((s) => s.capacityApplyAll);

  const doApplyAll = () => {
    if (!applyAll) capacityApplyAll(capacity!);
    isAppliedAll(!applyAll);
  };

  return (
    <FormControl px={4} w="90%" mx="auto">
      <FormLabel fontSize="xs" m={0} ml={2}>
        Apply {propertyType === "hostel" ? "Bed" : "Guest"} count to all rooms
      </FormLabel>
      <InputGroup>
        <Input
          type="number"
          placeholder={
            propertyType === "hostel" ? "Number of beds" : "Guest Capacity"
          }
          bg="gray.50"
          flex={1}
          value={capacity || ""}
          onChange={(e) => {
            isAppliedAll(false);
            setCapacity(parseInt(e.target.value));
          }}
        />
        <InputRightElement bg="none" right={2}>
          <Switch
            colorScheme="primary"
            isChecked={applyAll}
            onChange={doApplyAll}
            isDisabled={!capacity}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default CapacityApplyInput;
