import {
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import AnimateMove from "../../../motions/Move";
import useBookingStore from "../../../store/bookingStore";
import CheckInTimePicker from "../AddProperty/CheckInTimePicker";
import DropZone from "./DropZone";

const PaymentProofModal = ({
  callback,
}: {
  callback: (state: boolean) => void;
}) => {
  const files = useBookingStore((s) => s.paymentProofFile);
  const addPaymentProof = useBookingStore((s) => s.addPaymentProof);
  const removeFiles = useBookingStore((s) => s.removePaymentProof);
  const arrivalTime = useBookingStore((s) => s.arrivalTime);

  useEffect(() => {
    if (files?.length === 1 && arrivalTime) callback(true);
    else callback(false);
  }, [files, arrivalTime, callback]);

  return (
    <>
      <Box w="100%" p={4} bg="#f4f4f4" borderRadius={10}>
        <AnimateMove delay={0.2}>
          <VStack w="100%" align="start" gap={0}>
            <Heading fontSize="md" mb={2}>
              Arrival Time
            </Heading>
            <CheckInTimePicker arrivalTime />
          </VStack>
        </AnimateMove>

        <Divider my={8} opacity={0.2} />

        <VStack align="start">
          <Heading fontSize="md" mb={2}>
            Payment Proof File
          </Heading>

          <AnimateMove delay={0.2} noWidth>
            <VStack
              w="100%"
              align="start"
              gap={0}
              pointerEvents={1 === files?.length ? "none" : "all"}
              opacity={1 === files?.length ? 0.5 : 1}
            >
              <DropZone
                limit={1}
                callback={addPaymentProof}
                isDisabled={files?.length === 1}
              />
            </VStack>
          </AnimateMove>

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
        </VStack>
      </Box>
    </>
  );
};

export default PaymentProofModal;
