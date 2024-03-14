import { Box, Button, Flex, Icon, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useGetAllProperties } from "../../hooks/usePropertyServices";
import AnimateMove from "../../motions/Move";
import PropertyCard from "../elements/PropertyCard";
import Title from "../elements/Title";
import { Link } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";

const PropertyPage = () => {
  const { data: properties, isLoading } = useGetAllProperties();

  return (
    <Flex flexDir="column" gap={8}>
      <AnimateMove delay={0.2}>
        <Title
          heading="Your Properties"
          subtitle="Tap on properties to edit them"
          align="left"
          size="2xl"
        />

        <Box my={4}>
          <SimpleGrid columns={{ base: 2, sm: 3 }} gap={4}>
            <Link to="add">
              <Button
                leftIcon={<Icon as={BsFillPlusCircleFill} />}
                colorScheme="primary"
              >
                New Property
              </Button>
            </Link>
          </SimpleGrid>
        </Box>
      </AnimateMove>

      {isLoading ? (
        <Spinner />
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mt={4}>
          {properties?.data.map((property, i) => (
            <AnimateMove delay={0.4 * (i + 1)}>
              <PropertyCard property={property} />
            </AnimateMove>
          ))}
        </SimpleGrid>
      )}
    </Flex>
  );
};

export default PropertyPage;
