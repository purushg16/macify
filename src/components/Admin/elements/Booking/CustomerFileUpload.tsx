import { Box, Button, Flex, Heading, Highlight, Text } from "@chakra-ui/react";
import AnimateMove from "../../../motions/Move";
import DropZone from "./DropZone";
import useBookingStore from "../../../store/bookingStore";
import ImageHolder from "./ImageHolder";
import file from "../../../../assets/booking/fileUpload.png";
import { Link, Navigate } from "react-router-dom";

function CustomerFileUpload() {
  const count = useBookingStore((s) => s.numberOfGuests);

  if (!count) return <Navigate to="/booking" />;
  return (
    <>
      <ImageHolder image={file} />
      <Flex flexDir="column" w="100%">
        <AnimateMove delay={0.2}>
          <DropZone />
        </AnimateMove>

        <AnimateMove delay={0.4}>
          <Box mt={8}>
            <Heading fontSize="xl">Upload Proofs</Heading>
            <Text color="gray">
              {count && (
                <Highlight
                  query={count.toString()}
                  styles={{
                    fontWeight: 700,
                    borderRadius: 99,
                    bg: "primary.100",
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
          <Box mt={4}>
            <Link to="/booking">
              <Button>Back</Button>
            </Link>
          </Box>
        </AnimateMove>
      </Flex>
    </>
  );
}

export default CustomerFileUpload;
