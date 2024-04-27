import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import AnimateMove from "../../../motions/Move";
import DropZone from "./DropZone";
import useBookingStore from "../../../store/bookingStore";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import BookingFooter from "./BookingFooter";
import { IoClose } from "react-icons/io5";
import extractData from "../../../functions/ocrDetailsFetcher";
import useBookingGuestStore from "../../../store/bookingGuestStore";
import useBookingRoomStore from "../../../store/bookingRoomStore";
import cloudinaryUpload from "../../../functions/cloudinaryUploader";
import { useState } from "react";
import createGuest from "../../../functions/createGuest";

function CustomerFileUpload() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const propertyId = useParams().propertyId;

  const count = useBookingStore((s) => s.numberOfGuests);
  const addFiles = useBookingStore((s) => s.addFiles);
  const files = useBookingStore((s) => s.filesUploaded);
  const removeFiles = useBookingStore((s) => s.removeFiles);
  const clearGuests = useBookingGuestStore((s) => s.clearGuests);
  const appendGuests = useBookingGuestStore((s) => s.appendGuests);
  const resetUnassignedGuests = useBookingRoomStore(
    (s) => s.resetUnassignedGuests
  );

  const extractDocData = async (uploadedFile: string) => {
    try {
      await extractData(uploadedFile).then((res) => {
        appendGuests(res);
      });
    } catch (error) {
      appendGuests(createGuest(uploadedFile));
    }
  };

  const handleUpload = async () => {
    clearGuests();
    setIsLoading(true);

    try {
      const uploadResponses = await cloudinaryUpload(files!);

      await Promise.all(
        uploadResponses.map(async (response) => {
          if (response !== undefined) await extractDocData(response.secure_url);
        })
      );
    } catch (error) {
      toast({
        title: "Files are not added to the cloud, try again later",
        status: "warning",
        duration: 2000,
      });
    } finally {
      setIsLoading(false);
      resetUnassignedGuests();
    }
    navigate("/booking/" + propertyId + "/3");
  };

  if (!count) return <Navigate to={"/booking/" + propertyId} />;
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
                <Text fontSize="sm" lineHeight="normal" maxW="80%">
                  {file.name}
                </Text>
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
              <DropZone
                limit={count}
                callback={addFiles}
                isDisabled={files?.length === count}
              />
            </Box>
          </AnimateMove>
        }
        buttons={
          <>
            <Link to={"/booking/" + propertyId + "/1"}>
              <Button>Back</Button>
            </Link>

            <Button
              isLoading={isLoading}
              isDisabled={files?.length !== count}
              colorScheme="primary"
              onClick={handleUpload}
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
