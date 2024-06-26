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
  Spacer,
  IconButton,
  Icon,
  useToast,
} from "@chakra-ui/react";
import PropertyRespone from "../../entities/PropertyResponse";
import PropertyCardFooter from "./PropertyCardFooter";
import { IoCopyOutline } from "react-icons/io5";

const PropertyCard = ({ property }: { property: PropertyRespone }) => {
  const toast = useToast();

  return (
    <Accordion allowToggle>
      <AccordionItem
        border="1px solid"
        borderColor="gray.100"
        borderRadius={20}
      >
        <AccordionButton _hover={{ background: "none" }} px={0}>
          <Flex textAlign="left" w="100%" gap={4} flexDir="column" p={4}>
            <Flex>
              <Box>
                <Heading fontSize="xl" textTransform="capitalize">
                  {property.propertyName}
                </Heading>
                <Text fontSize="sm" textTransform="capitalize">
                  {property.propertyType}
                </Text>
              </Box>
              <Spacer />
              {/* <HStack>
                <IconButton
                  sx={{ borderRadius: "10px !important" }}
                  aria-label="del-btn"
                  icon={<Icon as={MdDeleteOutline} />}
                  border="1px solid"
                  borderColor="gray.50"
                  bg="red.200"
                  _hover={{ bg: "red.300" }}
                /> */}
              <IconButton
                sx={{ borderRadius: "10px !important" }}
                aria-label="del-btn"
                icon={<Icon as={IoCopyOutline} />}
                border="1px solid"
                borderColor="gray.50"
                colorScheme="primary"
                onClick={(event) => {
                  event.stopPropagation();
                  navigator.clipboard
                    .writeText(
                      window.location.origin + "/booking/" + property._id
                    )
                    .then(() =>
                      toast({
                        title: "Link Copied",
                        status: "success",
                        duration: 2000,
                        position: "top",
                      })
                    );
                }}
              />
              {/* </HStack> */}
            </Flex>

            <SimpleGrid
              columns={2}
              gap={4}
              pt={8}
              borderTop="1px solid"
              borderColor="gray.100"
            >
              <Flex
                flexDir="column"
                justify="end"
                p={4}
                bg="secondary.50"
                borderRadius={10}
                gap={2}
              >
                <Heading fontSize="3xl"> {property.rooms.length} </Heading>
                <Text color="gray" fontSize="sm">
                  Rooms <br />
                  Available
                </Text>
              </Flex>
              <Flex
                flexDir="column"
                justify="end"
                p={4}
                bg="secondary.50"
                borderRadius={10}
                gap={2}
              >
                <Heading fontSize="xl"> Manager </Heading>
                <Text color="gray" fontSize="sm">
                  Manager Assigned
                </Text>
              </Flex>
            </SimpleGrid>
          </Flex>
        </AccordionButton>

        <AccordionPanel pb={4} px={0}>
          <PropertyCardFooter
            id={property._id}
            propertyType={property.propertyType}
            rentWithin={property.rentWithin}
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default PropertyCard;
