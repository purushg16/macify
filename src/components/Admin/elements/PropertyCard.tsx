import {
  Box,
  Flex,
  SimpleGrid,
  Heading,
  Text,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import PropertyRespone from "../../entities/PropertyResponse";
import PropertyCardFooter from "./PropertyCardFooter";

const PropertyCard = ({ property }: { property: PropertyRespone }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem border="none">
        <AccordionButton _hover={{ background: "none" }} px={0}>
          <Flex
            textAlign="left"
            w="100%"
            gap={4}
            flexDir="column"
            bg="#f6f6f6"
            p={8}
            px={4}
            borderRadius={10}
            boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;"
          >
            <Box>
              <Heading fontSize="xl" textTransform="capitalize">
                {property.propertyName}
              </Heading>
            </Box>
            <SimpleGrid columns={2} gap={4}>
              <Box p={4} bg="gray.50" borderRadius={10}>
                <Text color="gray" fontSize="sm">
                  Type
                </Text>
                <Heading fontSize="xl" textTransform="capitalize">
                  {property.propertyType}
                </Heading>
              </Box>
              <Box p={4} bg="gray.50" borderRadius={10}>
                <Text color="gray" fontSize="sm">
                  Rooms
                </Text>
                <Heading fontSize="xl"> {property.rooms.length} </Heading>
              </Box>
            </SimpleGrid>
          </Flex>
        </AccordionButton>

        <AccordionPanel pb={4} px={0}>
          <PropertyCardFooter id={property._id} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default PropertyCard;
