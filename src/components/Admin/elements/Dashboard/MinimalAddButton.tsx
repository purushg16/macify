import { Box, HStack, Heading, Icon, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface Props {
  route: string;
  icon: IconType;
  title: string;
}

const MinimalAddButton = ({ title, route, icon }: Props) => {
  return (
    <Link to={route}>
      <HStack
        gap={4}
        borderRadius={20}
        p={4}
        bg="#f4f4f4"
        minW="max-content"
        pr={8}
      >
        <Box p={4} bg="secondary.50" borderRadius={100} lineHeight={0}>
          <Icon color="black" as={icon} />
        </Box>
        <VStack gap={0} align="start">
          <Heading fontSize="sm" textTransform="capitalize">
            New {title}
          </Heading>
          <Heading fontSize="xs" color="gray" textTransform="capitalize">
            Add New {title}
          </Heading>
        </VStack>
      </HStack>
    </Link>
  );
};

export default MinimalAddButton;
