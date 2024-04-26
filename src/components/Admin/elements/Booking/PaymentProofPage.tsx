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
import { Link, useParams } from "react-router-dom";
import BookingFooter from "./BookingFooter";
import SubmitButton from "./SubmitButton";
import DropZone from "./DropZone";
import useBookingStore from "../../../store/bookingStore";
import CheckInTimePicker from "../AddProperty/CheckInTimePicker";
import { IoClose } from "react-icons/io5";
import AnimateMove from "../../../motions/Move";

const PaymentProofPage = () => {
  const propertyId = useParams().propertyId;
  const files = useBookingStore((s) => s.paymentProofFile);
  const addPaymentProof = useBookingStore((s) => s.addPaymentProof);
  const removeFiles = useBookingStore((s) => s.removePaymentProof);

  return (
    <>
      <Box w="100%" p={4} bg="#f4f4f4" borderRadius={10}>
        <Heading fontSize="md" mb={4}>
          Uploaded Proof
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
        title="Payment Proof"
        subheading="Attach (Single file) Payment proof & Arrival time"
        children={
          <VStack gap={4}>
            <AnimateMove delay={0.2}>
              <VStack w="100%" align="start" gap={0}>
                <Text fontSize="xs"> Arrival Time </Text>
                <CheckInTimePicker />
              </VStack>
            </AnimateMove>

            <AnimateMove delay={0.2}>
              <VStack
                w="100%"
                align="start"
                gap={0}
                pointerEvents={1 === files?.length ? "none" : "all"}
                opacity={1 === files?.length ? 0.5 : 1}
              >
                <Text fontSize="xs"> Payment Proof </Text>
                <DropZone
                  limit={1}
                  callback={addPaymentProof}
                  isDisabled={files?.length === 1}
                />
              </VStack>
            </AnimateMove>
          </VStack>
        }
        buttons={
          <>
            <Link to={"/booking/" + propertyId + "/6"}>
              <Button> Back </Button>
            </Link>
            <SubmitButton />
          </>
        }
      />
    </>
  );
};

export default PaymentProofPage;
