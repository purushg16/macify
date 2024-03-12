import { Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  label: string;
  secondary?: string;
  icon: IconType;
  color?: string;
  active?: boolean;
}

const DashboardOptButton = ({
  label,
  icon,
  color = "gray",
  active = false,
}: Props) => {
  return (
    <Flex
      borderRadius={10}
      flexDir="column"
      gap={4}
      p={2}
      py={4}
      border="1px solid"
      borderColor={`${color}.500`}
      alignItems="center"
      justify="center"
      bg={active ? `${color}.100` : `${color}.50`}
      _hover={{ bg: `${color}.100` }}
      transition="all 0.7s"
      cursor="pointer"
    >
      <IconButton
        bg="white"
        _hover={{ bg: "white" }}
        aria-label="opt-btn"
        icon={<Icon as={icon} />}
        w="max-content"
      />
      <Text fontSize="sm" textAlign="center">
        {label}
      </Text>
    </Flex>
  );
};

export default DashboardOptButton;
