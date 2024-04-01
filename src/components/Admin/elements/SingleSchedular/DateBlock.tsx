import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

interface DateBlockProps {
  currentDate: Date;
}

const DateBlock = ({ currentDate }: DateBlockProps) => {
  const month = currentDate.toDateString().split(" ").slice(1, 3)[0];
  const date = currentDate.toDateString().split(" ").slice(1, 3)[1];

  return (
    <Box
      minW={{ base: 61, md: 110, lg: 160 }}
      display="flex"
      flexDir="column"
      bg="white"
      pt={2}
    >
      <SimpleGrid
        pos="relative"
        id="date-block"
        borderBottom="1px solid #ECF2F3"
        pb={2}
      >
        <Text
          textAlign="center"
          fontWeight={700}
          fontSize="xs"
          color="gray.200"
        >
          {month}
        </Text>
        <Heading
          textAlign="center"
          fontWeight={700}
          fontSize="lg"
          lineHeight="normal"
          color="secondary.300"
        >
          {date} {/* date */}
        </Heading>
      </SimpleGrid>
    </Box>
  );
};

export default DateBlock;
