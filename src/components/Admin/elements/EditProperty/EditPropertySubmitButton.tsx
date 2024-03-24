import { Button } from "@chakra-ui/react";
import { useEditProperty } from "../../../hooks/usePropertyServices";
import { EditPropertyInterface } from "../../../api/property-client";

const EditPropertySubmitButton = ({
  isDisabled,
  property,
}: {
  property: EditPropertyInterface;
  isDisabled: boolean;
}) => {
  const { mutate, isPending } = useEditProperty();
  const handleSubmit = () => mutate(property);

  return (
    <Button
      isLoading={isPending}
      my={4}
      bg="green.100"
      _hover={{ bg: "green.200" }}
      border="1px solid"
      borderColor="green.300"
      isDisabled={isDisabled}
      onClick={handleSubmit}
    >
      Submit
    </Button>
  );
};

export default EditPropertySubmitButton;
