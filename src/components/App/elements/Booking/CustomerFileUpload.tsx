import { Box, Button, Flex, Heading, Highlight, Text } from "@chakra-ui/react";
import AnimateMove from "../../../motions/Move";
import DropZone from "./DropZone";
import useBookingStore from "../../../store/bookingStore";

function CustomerFileUpload() {
  const count = useBookingStore((s) => s.numberOfGuests);
  const isNumberOfGuestsSelected = useBookingStore(
    (s) => s.isNumberOfGuestsSelected
  );

  return (
    <>
      <Box w="100%">
        <AnimateMove delay={0.2}>
          <DropZone />
        </AnimateMove>
      </Box>

      <Flex flexDir="column" w="100%" gap={8}>
        <AnimateMove delay={0.4}>
          <Box>
            <Heading fontSize="xl">Upload Proofs</Heading>
            <Text color="gray" my={2}>
              {count && (
                <Highlight
                  query={count.toString()}
                  styles={{
                    fontWeight: 700,
                    borderRadius: 99,
                    bg: "orange.100",
                    px: 2,
                    mx: 1,
                  }}
                  children={`Upload files for ${count} people`}
                />
              )}
            </Text>
          </Box>
        </AnimateMove>

        <AnimateMove delay={0.6}>
          <Box>
            <Button onClick={() => isNumberOfGuestsSelected(false)}>
              Edit Count
            </Button>
          </Box>
        </AnimateMove>
      </Flex>
    </>
  );
}

export default CustomerFileUpload;
