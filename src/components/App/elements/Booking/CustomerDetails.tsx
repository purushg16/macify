import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  Text,
  useNumberInput,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { TbMinus } from "react-icons/tb";
import CustomerFileUpload from "./CustomerFileUpload";
import homies from "../../../../assets/app/homies.png";
import AnimateMove from "../../../motions/Move";

const CustomerDetails = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 50,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const fileSelected = (selected: boolean) => {
    console.log(selected);
  };
  const handleFile = () => {};

  const [guestsSelected, setGetsSelected] = useState(false);

  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="center"
      m="auto"
      maxW={guestsSelected ? 1200 : 700}
      my={{ base: 8, md: 16 }}
      p={8}
      borderRadius={20}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
    >
      {!guestsSelected && (
        <AnimateMove>
          <Flex
            flexDir="column"
            gap={8}
            textAlign="center"
            alignItems="center"
            justifyContent="center"
          >
            <Box mb={2}>
              <Image m="auto" src={homies} mb={2} w={97} h={148} />
              <Heading fontSize="xl" mb={2}>
                Number of Homies
              </Heading>
              <Text fontSize="md" color="gray" maxW={300} m="auto">
                You can always come back and add or remove your homies {": )"}
              </Text>
            </Box>
            <HStack gap={4}>
              <Input
                {...input}
                maxW={200}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;"
              />

              <Button {...dec} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                <Icon as={TbMinus} />
              </Button>

              <Button {...inc} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                <Icon as={BsPlus} boxSize={5} />
              </Button>
            </HStack>
            <Button
              ml={4}
              colorScheme="orange"
              onClick={() => {
                setGetsSelected(true);
              }}
            >
              Continue
            </Button>

            <Divider my={4} />
          </Flex>
        </AnimateMove>
      )}

      {guestsSelected && (
        <AnimateMove>
          <Box opacity={guestsSelected ? 1 : 0.1}>
            <CustomerFileUpload
              active={guestsSelected}
              fileSelected={fileSelected}
              handleFile={handleFile}
            />
          </Box>
        </AnimateMove>
      )}
    </Flex>
  );
};

export default CustomerDetails;
