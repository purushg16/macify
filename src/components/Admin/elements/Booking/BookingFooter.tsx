import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import Title from "../Title";
import { IoMdInformationCircle } from "react-icons/io";

interface Props {
  title: string;
  subheading: string;
  children?: ReactNode;
  buttons: ReactNode;
  image?: string;
  note?: string;
  w?: number;
}

const BookingFooter = ({
  title,
  subheading,
  children,
  buttons,
  image,
  note,
  w = 250,
}: Props) => {
  return (
    <Flex
      flexDir="column"
      bg="#E4FEE4"
      borderRadius={20}
      pos="fixed"
      left={0}
      bottom={0}
      w="100%"
      maxW="100%"
      gap={4}
    >
      {!!image && (
        <Box pos="relative" h={150} maxH={150} zIndex={-10}>
          <Image
            w={w}
            src={image}
            pos="absolute"
            top={-10}
            mx="auto"
            left=" 50%"
            transform="translate(-50%, 0)"
          />
        </Box>
      )}

      <VStack
        gap={8}
        align="start"
        justify="space-between"
        p={4}
        py={8}
        zIndex={200}
        bg="#E4FEE4"
      >
        <Box maxW="90%">
          {!!note && (
            <Button
              mb={2}
              size="xs"
              leftIcon={<Icon as={IoMdInformationCircle} />}
              w="max-content"
            >
              Tap on rooms to allocate
            </Button>
          )}
          <Title
            size="xl"
            substitleSize="sm"
            heading={title}
            subtitle={subheading}
            align="left"
          />
        </Box>
        {children && <Box alignSelf="center">{children}</Box>}

        <HStack alignSelf="end">{buttons}</HStack>
      </VStack>
    </Flex>
  );
};

export default BookingFooter;
