import { Box, SimpleGrid, Text } from "@chakra-ui/react";

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
        pb={5}
      >
        <Text textAlign="center" fontWeight={700} fontSize="md" opacity={0.7}>
          {month} {/* month */}
        </Text>
        <Text
          textAlign="center"
          fontWeight={700}
          fontSize="2xl"
          lineHeight="normal"
        >
          {date} {/* date */}
        </Text>
      </SimpleGrid>
    </Box>
  );
};

export default DateBlock;
