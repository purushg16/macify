import { Flex, Box } from "@chakra-ui/react";
import { BiBuildings, BiListCheck } from "react-icons/bi";
import AddButton from "./AddButton";
import { BsPerson } from "react-icons/bs";

const AddStack = () => {
  return (
    <Box
      mt={4}
      maxW="100vw"
      overflowX="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "0px", // Set the width of the scrollbar
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "0px", // Set the border radius of the thumb
        },
        "&::-webkit-scrollbar-track": {
          borderRadius: "1px", // Set the border radius of the track
        },
      }}
    >
      <Flex gap={4} pb={2}>
        <AddButton
          label="Add Property"
          color="green"
          icon={BiBuildings}
          route="properties/add"
        />
        <AddButton
          label="Add Manager"
          color="blue"
          icon={BsPerson}
          route="manager/add"
        />
        <AddButton
          label="Monthly Booking"
          color="orange"
          icon={BiListCheck}
          route="calendar/multi"
        />
      </Flex>
    </Box>
  );
};

export default AddStack;
