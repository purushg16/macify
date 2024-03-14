import { Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  icon: IconType;
  active?: boolean;
  onclick?: () => void;
}

const HostingButton = ({ title, icon, active = false, onclick }: Props) => {
  return (
    <Flex
      // size="sm"
      flexDir={{ base: "column", md: "row" }}
      bg={active ? "primary.500" : "white"}
      borderRadius={20}
      gap={2}
      p={4}
      align="start"
      w="100%"
      cursor="pointer"
      onClick={onclick}
      color={active ? "white" : "black"}
    >
      <Icon as={icon} />
      <Text lineHeight="normal" fontSize="xs">
        {title.split(" ")[0]} <br /> {title.split(" ")[1]}
      </Text>
    </Flex>
  );
};

export default HostingButton;
