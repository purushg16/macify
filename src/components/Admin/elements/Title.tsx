import { Box, Heading, Text } from "@chakra-ui/react";

interface AddTitleProps {
  heading: string;
  subtitle: string;
  align?: CanvasTextAlign;
}

const Title = ({ heading, subtitle, align = "center" }: AddTitleProps) => {
  return (
    <Box textAlign={align}>
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
