import { Button, Flex, Input, Switch } from "@chakra-ui/react";
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
    <Flex gap={2}>
      {propertyType === "Hostel" ? (
        <Input
          placeholder="Number of beds"
          bg="gray.50"
          flex={1}
          value={capacity || ""}
          onChange={(e) => {
            isAppliedAll(false);
            setCapacity(parseInt(e.target.value));
          }}
        />
      ) : (
        <Input
          placeholder="Capacity"
          bg="gray.50"
          flex={1}
          type="number"
          value={capacity || ""}
          onChange={(e) => {
            isAppliedAll(false);
            setCapacity(parseInt(e.target.value));
          }}
        />
      )}
      <Switch
        w={130}
        as={Button}
        display="flex"
        alignItems="center"
        justifyContent="center"
        colorScheme="primary"
        isChecked={applyAll}
        onChange={doApplyAll}
        isDisabled={!capacity}
      >
        Apply All
      </Switch>
    </Flex>
  );
};

export default CapacityApplyInput;
