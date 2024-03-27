import { Spinner, Text } from "@chakra-ui/react";

const LoadingIndicator = ({
  text,
  inline,
}: {
  text: string;
  inline?: boolean;
}) => {
  return (
    <Text
      fontSize="xs"
      color="gray"
      align="center"
      display={inline ? "inline-flex" : "flex"}
      gap={2}
      textTransform="capitalize"
      ml={inline ? 2 : 0}
    >
      <Spinner color="primary.500" size="sm" opacity={0.5} />
      Loading {text}
    </Text>
  );
};

export default LoadingIndicator;
