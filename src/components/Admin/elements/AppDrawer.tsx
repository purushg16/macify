import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { TbMenu } from "react-icons/tb";

const AppDrawer = ({
  children,
  clickFn,
}: {
  children: ReactNode;
  clickFn: () => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme="primary"
        onClick={() => {
          onOpen();
          clickFn();
        }}
        pos="fixed"
        bottom={5}
        right={5}
      >
        <Icon as={TbMenu} />
      </Button>

      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody bg="gray.100">
            <Box>{children}</Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppDrawer;
