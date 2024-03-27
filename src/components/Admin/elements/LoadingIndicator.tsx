import { Spinner, Text } from "@chakra-ui/react";

const LoadingIndicator = ({ text }: { text: string }) => {
  return (
    <Text
      fontSize="xs"
      color="gray"
      align="center"
      display="flex"
      gap={2}
      textTransform="capitalize"
    >
      <Spinner color="primary.500" size="sm" opacity={0.5} />
      Loading {text}
    </Text>
  );
};

export default LoadingIndicator;
