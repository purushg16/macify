import { Box, Heading, Text } from "@chakra-ui/react";

interface AddTitleProps {
  heading: string | undefined;
  subtitle: string;
  align?: CanvasTextAlign;
}

const Title = ({ heading, subtitle, align = "center" }: AddTitleProps) => {
  return (
    <Box textAlign={align}>
      <Heading fontSize="2xl" fontWeight={500} textTransform="capitalize">
        {heading}
      </Heading>
      <Text color="gray" fontSize="sm" textTransform="capitalize">
        {subtitle}
      </Text>
    </Box>
  );
};

export default Title;
