import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const EditBookingGuestWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box p={4} bg="#f4f4f4" borderRadius={10}>
      <Box pb={4}>
        <Text mb={4}>Guest Details</Text>
      </Box>
      {children}
    </Box>
  );
};

export default EditBookingGuestWrapper;
