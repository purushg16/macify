import { Box, HStack, Heading, Icon, Image, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface Props {
  route: string;
  icon: IconType;
  title: string;
  bg: string;
  img: string;
}

const MinimalAddButton = ({ title, route, icon, bg, img }: Props) => {
  return (
    <Link to={route}>
      <HStack
        gap={4}
        borderRadius={20}
        p={4}
        minW="max-content"
        pr={8}
        pos="relative"
        overflow="hidden"
        bgColor={bg}
        // color="white"
      >
        <Image
          src={img}
          alt=""
          pos="absolute"
          bottom={-70}
          right={-100}
          zIndex={0}
          opacity={0.9}
        />
        <Box p={4} bg="secondary.50" borderRadius={100} lineHeight={0}>
          <Icon color="black" as={icon} />
        </Box>
        <VStack gap={0} align="start">
          <Heading fontSize="sm" textTransform="capitalize" zIndex={2}>
            New {title}
          </Heading>
          <Heading fontSize="xs" textTransform="capitalize" zIndex={2}>
            Add New {title}
          </Heading>
        </VStack>
      </HStack>
    </Link>
  );
};

export default MinimalAddButton;
