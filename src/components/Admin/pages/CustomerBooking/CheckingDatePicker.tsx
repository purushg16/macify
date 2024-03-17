import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { BsClock } from "react-icons/bs";
import Title from "../../elements/Title";

const CheckingDatePicker = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        sx={{ borderRadius: "10px !important" }}
        bg="primary.200"
        _hover={{ bg: "primary.300" }}
        size="sm"
        onClick={onOpen}
        aria-label="pick"
        icon={<Icon as={BsClock} />}
      />

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Title
              align="left"
              size="xl"
              heading="Pick a range"
              subtitle="Choose check in  & out dates"
            />
          </ModalHeader>
          <ModalBody>
            <DateRange
              editableDateInputs={true}
              onChange={(item) =>
                setState([
                  {
                    startDate: item.selection.startDate!,
                    endDate: item.selection.endDate!,
                    key: item.selection.key!,
                  },
                ])
              }
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={4}>
              Close
            </Button>
            <Button onClick={onClose} colorScheme="primary">
              Alright!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CheckingDatePicker;
