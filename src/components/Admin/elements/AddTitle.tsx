import { Box, Heading, Text } from "@chakra-ui/react";

interface AddTitleProps {
  heading: string;
  subtitle: string;
}

const AddTitle = ({ heading, subtitle }: AddTitleProps) => {
  return (
    <Box textAlign="center">
      <Heading fontSize="xl"> {heading} </Heading>
      <Text color="gray"> {subtitle} </Text>
    </Box>
  );
};

export default AddTitle;
