import { Flex, Input, Button, Switch } from "@chakra-ui/react";
import { useState } from "react";
import useAddPropertyRoomStore from "../../../store/AddProperty/addPropertyRoomStore";

const SerializeInput = () => {
  const [startingNumber, setStartingNumber] = useState<number>();
  const [serialize, isSerialized] = useState<boolean>(false);

  const performSerialize = useAddPropertyRoomStore((s) => s.serialize);

  const doSerialize = () => {
    if (!serialize && !!startingNumber) {
      performSerialize(startingNumber);
    } else performSerialize(1);
    isSerialized(!serialize);
  };

  return (
    <Flex gap={2}>
      <Input
        type="number"
        placeholder="Starting Room Number"
        bg="gray.50"
        flex={1}
        value={startingNumber || ""}
        onChange={(e) => {
          isSerialized(false);
          setStartingNumber(parseInt(e.target.value || ""));
        }}
      />

      <Button w={130} onChange={doSerialize}>
        <Switch
          colorScheme="primary"
          mr={2}
          isDisabled={!startingNumber}
          isChecked={serialize}
          onChange={doSerialize}
        />
        Serialize
      </Button>
    </Flex>
  );
};

export default SerializeInput;
