import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Icon,
  IconButton,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { CiCircleMore } from "react-icons/ci";
import Manager from "../../../entities/manager";

interface ManagerDrawerProps {
  manager: Manager;
}

const ManagerDrawer = ({ manager }: ManagerDrawerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const [edit, enableEdit] = useState(false);

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="more-manager"
        icon={<Icon as={CiCircleMore} boxSize="100%" color="black" />}
        boxSize={6}
        p={0}
        bg="none"
        transition="all 0.5s"
        _hover={{ bg: "none", opacity: 0.7 }}
      />
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={() => {
          onClose();
          enableEdit(false);
        }}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> {manager.name} </DrawerHeader>

          <DrawerBody mt={4}>
            <VStack gap={6} align="left">
              <VStack align="left">
                <Text> Name </Text>

                {edit ? (
                  <Input
                    value={manager.name}
                    borderRadius={20}
                    bg="gray.100"
                    onChange={(e) => console.log(e)}
                  />
                ) : (
                  <Input
                    value={manager.name}
                    isDisabled
                    borderRadius={20}
                    bg="gray.100"
                  />
                )}
              </VStack>

              <VStack align="left">
                <Text> Phone </Text>

                {edit ? (
                  <Input
                    value={manager.phone}
                    borderRadius={20}
                    bg="gray.100"
                    onChange={(e) => console.log(e)}
                  />
                ) : (
                  <Input
                    value={manager.phone}
                    isDisabled
                    borderRadius={20}
                    bg="gray.100"
                  />
                )}
              </VStack>

              <VStack align="left">
                <Text> Email </Text>
                {edit ? (
                  <Input
                    value={manager.email}
                    borderRadius={20}
                    bg="gray.100"
                    onChange={(e) => console.log(e)}
                  />
                ) : (
                  <Input
                    value={manager.email}
                    isDisabled
                    borderRadius={20}
                    bg="gray.100"
                  />
                )}
              </VStack>
            </VStack>
          </DrawerBody>

          <DrawerFooter
            alignItems="center"
            justifyContent="center"
            mt={4}
            gap={4}
          >
            {edit ? (
              <>
                <Button id="extra" onClick={() => enableEdit(false)}>
                  Cancel
                </Button>
                <Button
                  colorScheme="primary"
                  id="extra"
                  onClick={() => enableEdit(!edit)}
                >
                  Submit
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={onClose} id="extra">
                  Delete
                </Button>
                <Button
                  colorScheme="primary"
                  id="extra"
                  onClick={() => enableEdit(!edit)}
                >
                  Edit
                </Button>
              </>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ManagerDrawer;
