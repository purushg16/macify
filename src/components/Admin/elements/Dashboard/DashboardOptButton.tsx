import { Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  label: string;
  icon: IconType;
}

const DashboardOptButton = ({ label, icon }: Props) => {
  return (
    <Flex
      borderRadius={10}
      flexDir="column"
      gap={4}
      p={2}
      py={4}
      border="1px solid"
      borderColor="gray.50"
      alignItems="center"
      justify="center"
      bg="#f6f6f6"
      _hover={{ bg: "gray.50" }}
      transition="all 0.7s"
      cursor="pointer"
    >
      <IconButton
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
