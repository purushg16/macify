import { Box, Heading, Text } from "@chakra-ui/react";

interface AddTitleProps {
  heading: string | undefined;
  subtitle: string | undefined;
  align?: CanvasTextAlign;
  size?: "md" | "lg" | "xl" | "3xl" | "2xl" | "4xl";
  substitleSize?: "xs" | "sm" | "md";
}

const Title = ({
  heading,
  subtitle,
  align = "center",
  size = "2xl",
  substitleSize = "sm",
}: AddTitleProps) => {
  return (
    <Box textAlign={align}>
      <Heading fontSize={size} fontWeight={500} textTransform="capitalize">
        {heading}
      </Heading>
      <Text color="gray" fontSize={substitleSize}>
        {subtitle}
      </Text>
    </Box>
  );
};

export default Title;
