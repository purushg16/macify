import { Box, Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useGetAllProperties } from "../../hooks/usePropertyServices";
import AnimateMove from "../../motions/Move";
import AddPropertyButton from "../elements/AddPropertyButton";
import PropertyCard from "../elements/PropertyCard";
import Title from "../elements/Title";

const PropertyPage = () => {
  const { data: properties, isLoading } = useGetAllProperties();

  return (
    <Flex flexDir="column" gap={8}>
      <Title
        heading="Properties"
        subtitle="Manage & see all the property's details"
        align="left"
      />

      <Box borderBottom="1px solid" borderColor="gray.50">
        <AddPropertyButton />
      </Box>

      {isLoading ? (
        <Spinner />
      ) : (
        <Box>
          <Title heading="All Properties" subtitle="" align="left" />
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={8}
            p={2}
            mt={4}
          >
            {properties?.data.map((property, i) => (
              <AnimateMove delay={0.2 * (i + 1)}>
                <PropertyCard property={property} />
              </AnimateMove>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Flex>
  );
};

export default PropertyPage;
