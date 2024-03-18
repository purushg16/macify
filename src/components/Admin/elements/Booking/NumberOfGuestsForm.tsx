import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  Text,
  useNumberInput,
} from "@chakra-ui/react";
import { BsPlus } from "react-icons/bs";
import { TbMinus } from "react-icons/tb";
import homies from "../../../../assets/booking/friends.png";
import AnimateMove from "../../../motions/Move";
import useBookingStore from "../../../store/bookingStore";
import { useNavigate } from "react-router-dom";
import BookingFooter from "./BookingFooter";

const NumberOfGuestsForm = () => {
  const navigate = useNavigate();
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
      <BookingFooter
        title="Number of Homies"
        subheading={`You can always come back and add or remove your homies {": )"}`}
        image={homies}
        w={180}
        children={
          <AnimateMove delay={0.2}>
            <Box mx="auto">
              <Text> Guest Count </Text>
              <HStack gap={4} alignItems="center">
                <Input
                  textAlign="right"
                  bg="#f4f4f4"
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
            </Box>
          </AnimateMove>
        }
        buttons={
          <Button
            isDisabled={!(valueAsNumber >= 1)}
            colorScheme="primary"
            onClick={() => {
              setNumberOfGuests(valueAsNumber);
              isNumberOfGuestsSelected(true);
              navigate("2");
            }}
          >
            Continue
          </Button>
        }
      />

      {/*     
      <AnimateMove>
        <ImageHolder image={homies} />
      </AnimateMove>

      <Flex flexDir="column" w="100%" gap={4}>
        <AnimateMove delay={0.2}>
          <HStack gap={4} justifyContent="center" alignItems="center">
            <Input
              textAlign="right"
              bg="#f4f4f4"
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
          <Box mt={4}>
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
              navigate("2");
            }}
          >
            Continue
          </Button>
        </AnimateMove>
      </Flex> */}
    </>
  );
};

export default NumberOfGuestsForm;
