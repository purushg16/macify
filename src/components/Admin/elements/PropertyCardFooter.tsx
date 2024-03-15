import { Button, Icon, SimpleGrid } from "@chakra-ui/react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoGridOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const PropertyCardFooter = ({ id }: { id: string }) => {
  return (
    <SimpleGrid columns={2} mx={4} spacing={4}>
      <Link to={`edit/${id}`} style={{ width: "100%" }}>
        <Button
          leftIcon={<Icon as={BiDetail} />}
          justifyContent="start"
          w="100%"
        >
          Edit Details
        </Button>
      </Link>
      <Button leftIcon={<Icon as={IoGridOutline} />} justifyContent="start">
        Add Room
      </Button>
      <Button leftIcon={<Icon as={IoBedOutline} />} justifyContent="start">
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
      {/* <Link to={`edit/${id}`}>
        <DashboardOptButton label="Edit Details" icon={BiDetail} />
      </Link>
      <DashboardOptButton label="Edit Beds" icon={IoBedOutline} />
      <DashboardOptButton label="Edit Rooms" icon={IoGridOutline} /> */}
    </SimpleGrid>
  );
};

export default PropertyCardFooter;
