import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  Text,
  useNumberInput,
} from "@chakra-ui/react";
import { BsPlus } from "react-icons/bs";
import { TbMinus } from "react-icons/tb";
import homies from "../../../../assets/app/homies.png";
import AnimateMove from "../../../motions/Move";
import useBookingStore from "../../../store/bookingStore";

const NumberOfGuestsForm = () => {
  const numberOfGuests = useBookingStore((s) => s.numberOfGuests);
  const setNumberOfGuests = useBookingStore((s) => s.setNumberOfGuests);
  const isNumberOfGuestsSelected = useBookingStore(
    (s) => s.isNumberOfGuestsSelected
  );

  const {
    valueAsNumber,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: numberOfGuests || 1,
    min: 1,
    max: 50,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <>
      <Box>
        <AnimateMove delay={0.2}>
          <Image m="auto" src={homies} w={152} h={245} />
        </AnimateMove>
      </Box>

      <Flex flexDir="column" w="100%" gap={8}>
        <AnimateMove delay={0.2}>
          <HStack gap={4} justifyContent="center" alignItems="center">
            <Input
              textAlign="right"
              bg="gray.100"
              {...input}
              maxW={200}
              _active={{ outline: "none" }}
              _focus={{ outline: "red" }}
            />

            <Button
              p={0}
              {...inc}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
              bg="black"
              _hover={{ bg: "black" }}
            >
              <Icon as={BsPlus} boxSize={5} color="white" />
            </Button>

            <Button
              p={0}
              {...dec}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
              bg="black"
              _hover={{ bg: "black" }}
            >
              <Icon as={TbMinus} color="white" />
            </Button>
          </HStack>
        </AnimateMove>

        <AnimateMove delay={0.4}>
          <Box>
            <Heading fontSize="xl">Number of Homies</Heading>
            <Text fontSize="md" color="gray" maxW={300} m="auto">
              You can always come back and add or remove your homies {": )"}
            </Text>
          </Box>
        </AnimateMove>

        <AnimateMove delay={0.6}>
          <Button
            isDisabled={!(valueAsNumber >= 1)}
            ml={4}
            colorScheme="primary"
            onClick={() => {
              setNumberOfGuests(valueAsNumber);
              isNumberOfGuestsSelected(true);
            }}
          >
            Continue
          </Button>
        </AnimateMove>
      </Flex>
    </>
  );
};

export default NumberOfGuestsForm;
