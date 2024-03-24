import { Button, Icon, SimpleGrid } from "@chakra-ui/react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoGridOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { BiDetail } from "react-icons/bi";
import NavigatorWrapper from "./NavigatorWrapper";
import { PropertyType } from "../../store/AddProperty/addPropertyBasicStore";
import { useNavigate } from "react-router-dom";

const PropertyCardFooter = ({
  id,
  propertyType,
  rentWithin,
}: {
  id: string;
  propertyType: PropertyType;
  rentWithin: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <SimpleGrid columns={2} mx={4} spacing={4}>
      <NavigatorWrapper to={`edit/${id}`}>
        <Button
          leftIcon={<Icon as={BiDetail} />}
          justifyContent="start"
          w="100%"
        >
          Edit Details
        </Button>
      </NavigatorWrapper>

      <Button
        leftIcon={<Icon as={IoGridOutline} />}
        justifyContent="start"
        w="100%"
        isDisabled={!rentWithin}
        onClick={() => navigate(`addRooms/${id}`)}
      >
        Add Room
      </Button>

      <Button
        leftIcon={<Icon as={IoBedOutline} />}
        justifyContent="start"
        isDisabled={propertyType !== "hostel"}
        onClick={() => navigate(`addBeds/${id}`)}
      >
        Add Beds
      </Button>

      <Button
        justifyContent="start"
        leftIcon={<Icon as={MdOutlineDeleteOutline} />}
        bg="red.100"
        _hover={{ bg: "red.200" }}
      >
        Delete
      </Button>
    </SimpleGrid>
  );
};

export default PropertyCardFooter;
