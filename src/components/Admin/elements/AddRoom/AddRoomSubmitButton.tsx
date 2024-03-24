import { Button } from "@chakra-ui/react";
import { useAddRooms } from "../../../hooks/usePropertyServices";
import useAddRoomsStore from "../../../store/addRoomStore";

const AddRoomSubmitButton = ({ propertyId }: { propertyId: string }) => {
  const rooms = useAddRoomsStore((s) => s.rooms).find(
    (r) => r.propertyId === propertyId
  );
  const { mutate, isPending } = useAddRooms();

  return (
    <Button
      colorScheme="primary"
      isDisabled={!rooms || rooms.roomsData.length === 0}
      isLoading={isPending}
      onClick={() => rooms && mutate(rooms)}
    >
      Submit
    </Button>
  );
};

export default AddRoomSubmitButton;
