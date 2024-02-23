import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Input,
  VStack,
} from "@chakra-ui/react";
import building from "../../../../assets/app/building.png";
import AddTitle from "../../elements/AddTitle";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { TbChevronsDown } from "react-icons/tb";
import AnimateMove from "../../../motions/Move";
import useAddPropertyStore, {
  PropertyType,
} from "../../../store/admin/addPropertyStore";
import { Link } from "react-router-dom";

const PropertyTypes = ["Hostel", "Flat", "Villa"];

const NamePage = () => {
  const name = useAddPropertyStore((s) => s.propertyName);
  const type = useAddPropertyStore((s) => s.propertyType);
  const setName = useAddPropertyStore((s) => s.setPropertyName);
  const setType = useAddPropertyStore((s) => s.setPropertyType);

  return (
    <>
      <AnimateMove delay={0.2}>
        <Image src={building} alt="" w={350} />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <AddTitle
          heading="Add New Property"
          subtitle="Enter Property Name & Type"
        />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <VStack gap={4}>
          <Input
            bg="gray.50"
            placeholder="Property Name"
            value={name}
            onChange={() => setName(name)}
          />

          <Box position="relative">
            <Input placeholder="Property Type" bg="gray.50" value={type} />
            <Menu>
              <MenuButton
                _hover={{ bg: "gray.700" }}
                as={Button}
                pos="absolute"
                right={2}
                top={1}
                p={0}
                bg="black"
                color="white"
                size="sm"
              >
                <Icon as={TbChevronsDown} p={0} />
              </MenuButton>
              <MenuList p={1} borderRadius={20}>
                {PropertyTypes.map((pType) => (
                  <MenuItem
                    key={pType}
                    onClick={() => setType(pType as PropertyType)}
                  >
                    {pType}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </VStack>
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <HStack>
          <Link to="/admin/properties">
            <Button id="extra"> Cancel </Button>
          </Link>
          <Link to="/admin/add/property/2">
            <Button id="extra" colorScheme="primary">
              Next
            </Button>
          </Link>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default NamePage;
