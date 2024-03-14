import { Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  label: string;
  secondary?: string;
  icon: IconType;
  color?: string;
  active?: boolean;
}

const DashboardOptButton = ({ label, icon, active = false }: Props) => {
  return (
    <Flex
      mx={2}
      borderRadius={10}
      flexDir="column"
      gap={4}
      p={2}
      py={4}
      border="1px solid"
      borderColor={active ? `gray.200` : `gray.50`}
      alignItems="center"
      justify="center"
      bg={`#f6f6f6`}
      _hover={{ bg: `#f6f6f6` }}
      transition="all 0.7s"
      cursor="pointer"
    >
      <IconButton
        border={active ? "1px solid" : "none"}
        borderColor={active ? `gray.300` : `gray.50`}
        bg="white"
        _hover={{ bg: "white" }}
        aria-label="opt-btn"
        icon={<Icon as={icon} />}
        w="max-content"
      />
      <Text fontSize="xs" textAlign="center">
        {label}
      </Text>
    </Flex>
  );
};

export default DashboardOptButton;
