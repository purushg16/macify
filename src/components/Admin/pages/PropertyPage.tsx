import { Button, Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Title from "../elements/Title";
import PropertyCard from "../elements/PropertyCard";
import AnimateMove from "../../motions/Move";
import { useGetAllProperties } from "../../hooks/usePropertyServices";

const PropertyPage = () => {
  const { data: properties, isLoading } = useGetAllProperties();

  return (
    <Flex flexDir="column" gap={8}>
      <Flex justify="space-between">
        <Title
          heading="Properties"
          subtitle="Manage & see all the property's details"
          align="left"
        />
        <Link to="/admin/properties/add/">
          <Button> Add Property </Button>
        </Link>
      </Flex>

      {isLoading ? (
        <Spinner />
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} p={2}>
          {properties?.data.map((property, i) => (
            <AnimateMove delay={0.2 * (i + 1)}>
              <PropertyCard property={property} />
            </AnimateMove>
          ))}
        </SimpleGrid>
      )}
    </Flex>
  );
};

export default PropertyPage;
