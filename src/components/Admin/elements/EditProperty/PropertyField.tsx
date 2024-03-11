import { SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  fieldTitle: string;
  children: ReactNode;
}

const PropertyField = ({ children }: Props) => {
  return (
    <SimpleGrid
      spacing={4}
      p={4}
      border="1px dashed"
      borderColor="gray.100"
      borderRadius={10}
    >
      {children}
    </SimpleGrid>
  );
};

export default PropertyField;
