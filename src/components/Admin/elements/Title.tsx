import { Box, Heading, Text } from "@chakra-ui/react";

interface AddTitleProps {
  heading: string;
  subtitle: string;
}

const Title = ({ heading, subtitle }: AddTitleProps) => {
  return (
    <Box textAlign="center">
      <Heading fontSize="xl" fontWeight={500}>
        {heading}
      </Heading>
      <Text color="gray" fontSize="sm">
        {subtitle}
      </Text>
    </Box>
  );
};

export default Title;
