import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import AnimateMove from "../../../motions/Move";
import DropZone from "./DropZone";
import useBookingStore from "../../../store/bookingStore";
import { Link, Navigate, useNavigate } from "react-router-dom";
import BookingFooter from "./BookingFooter";
import { IoClose } from "react-icons/io5";
import extractData from "../../../functions/ocrDetailsFetcher";
import useBookingGuestStore from "../../../store/bookingGuestStore";

function CustomerFileUpload() {
  const navigate = useNavigate();

  const count = useBookingStore((s) => s.numberOfGuests);
  const files = useBookingStore((s) => s.filesUploaded);
  const removeFiles = useBookingStore((s) => s.removeFiles);
  const appendGuests = useBookingGuestStore((s) => s.appendGuests);

  const extractDocData = async () => {
    try {
      await extractData("aadhar", files!).then((res) => appendGuests(res));
    } catch (error) {
      console.error("Error extracting data:", error);
    }
  };

  if (!count) return <Navigate to="/booking" />;
  return (
    <>
      <Box w="100%" p={4} bg="#f4f4f4" borderRadius={10}>
        <Heading fontSize="md" mb={4}>
          Uploaded Files
        </Heading>
        <VStack w="100%">
          {files ? (
            files?.map((file, i) => (
              <Flex
                key={i}
                p={4}
                bg="#fff"
                borderRadius={10}
                w="100%"
                align="center"
              >
                <Text>{file.name}</Text>
                <Spacer />
                <IconButton
                  aria-label="cancel"
                  size="sm"
                  icon={<IoClose />}
                  bg="red.100"
                  _hover={{ bg: "red.200" }}
                  onClick={() => removeFiles(file)}
                />
              </Flex>
            ))
          ) : (
            <Text fontSize="xs"> No files Uploaded </Text>
          )}
        </VStack>
      </Box>
      <BookingFooter
        w={200}
        title="Upload Proofs"
        subheading={`Upload files for ${count} people`}
        children={
          <AnimateMove delay={0.2}>
            <Box
              pointerEvents={count === files?.length ? "none" : "all"}
              opacity={count === files?.length ? 0.5 : 1}
            >
              <DropZone />
            </Box>
          </AnimateMove>
        }
        buttons={
          <>
            <Link to="/booking">
              <Button>Back</Button>
            </Link>

            <Button
              isDisabled={files?.length !== count}
              colorScheme="primary"
              onClick={() => {
                extractDocData();
                navigate("/booking/3");
              }}
            >
              Next
            </Button>
          </>
        }
      />
    </>
  );
}

export default CustomerFileUpload;
