import { Box, Flex, HStack, Heading, Show, Spacer } from "@chakra-ui/react";
import Btn from "../../Brand/elements/Button";
import { NavButton } from "./AppButton";
import { TbLayoutBoard, TbCalendar, TbBuilding } from "react-icons/tb";

const Navbar = () => {
  return (
    <Box pos="relative">
      <Flex
        zIndex={2}
        alignItems="center"
        pos="fixed"
        px={{ base: 8, md: 16 }}
        py={4}
        w="100%"
        top={0}
      >
        <Heading fontSize="xl"> Macify </Heading>

        <Show above="lg">
          <Spacer />
          <HStack gap={4}>
            <NavButton title="Calender" icon={TbCalendar} />
            <NavButton title="Property" icon={TbBuilding} />
            <NavButton title="Caretaker" icon={TbLayoutBoard} />
          </HStack>
        </Show>

        <Spacer />
        <Show above="lg">
          <HStack gap={4}>
            <Btn text="Dayalan" primary />
          </HStack>
        </Show>

        <Show below="lg">
          <Btn text="Dayalan" />
        </Show>
      </Flex>
    </Box>
  );
};

export default Navbar;
