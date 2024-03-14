import { Box, Heading, Text } from "@chakra-ui/react";

interface AddTitleProps {
  heading: string | undefined;
  subtitle: string;
  align?: CanvasTextAlign;
  size?: "3xl" | "2xl" | "4xl";
}

const Title = ({
  heading,
  subtitle,
  align = "center",
  size = "2xl",
}: AddTitleProps) => {
  return (
    <Box textAlign={align}>
      <Heading fontSize={size} fontWeight={500} textTransform="capitalize">
        {heading}
      </Heading>
      <Text color="gray" fontSize="sm">
        {subtitle}
      </Text>
    </Box>
  );
};

export default Title;
