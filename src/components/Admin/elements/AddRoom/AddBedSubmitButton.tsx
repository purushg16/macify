import { Button } from "@chakra-ui/react";
import { useAddBeds } from "../../../hooks/usePropertyServices";
import useAddBedsStore from "../../../store/addBedStore";

const AddBedSubmitButton = ({
  propertyId,
  roomId,
}: {
  propertyId: string;
  roomId: string | undefined;
}) => {
  const { mutate, isPending } = useAddBeds();
  const bed = useAddBedsStore((s) => s.storeBeds).find(
    (b) => b.propertyId === propertyId && b.roomId === roomId
  );

  return (
    <Button
      isDisabled={!bed || bed.bedsData.length === 0}
      isLoading={isPending}
      onClick={() => bed && mutate(bed)}
      colorScheme="primary"
    >
      Submit
    </Button>
  );
};

export default AddBedSubmitButton;
