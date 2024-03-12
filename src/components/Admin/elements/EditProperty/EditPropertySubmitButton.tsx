import { Button } from "@chakra-ui/react";
// import { useEditProperty } from "../../../hooks/usePropertyServices";
// import { PropertyService } from "../../../api/property-client";

const EditPropertySubmitButton = () =>
  //     {
  //   property,
  // }: {
  //   property: PropertyService;
  // }
  {
    //   const { mutate } = useEditProperty();

    //   const handleSubmit = () => mutate(property);

    return (
      <Button
        my={4}
        bg="green.100"
        _hover={{ bg: "green.200" }}
        border="1px solid"
        borderColor="green.300"
        //   onClick={handleSubmit}
      >
        Submit
      </Button>
    );
  };

export default EditPropertySubmitButton;
