import { Box, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  time: string | undefined;
  icon: IconType;
}

const EditPropertyIconValue = ({ time, title, icon }: Props) => {
  return (
    <Box w="max-content">
      <Text mb={2} fontSize="sm" color="gray">
        {title}
      </Text>
      <Box
        p={2}
        px={4}
        borderRadius={10}
        bg="white"
        fontSize="xl"
        textTransform="capitalize"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={8}
      >
        {time}
        <Icon as={icon} />
      </Box>
    </Box>
  );
};

export default EditPropertyIconValue;
