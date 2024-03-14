import { SimpleGrid } from "@chakra-ui/react";
import DashboardOptButton from "./Dashboard/DashboardOptButton";
// import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoGridOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const PropertyCardFooter = ({ id }: { id: string }) => {
  return (
    <SimpleGrid columns={3} mx={4}>
      <Link to={`edit/${id}`}>
        <DashboardOptButton label="Edit Details" icon={BiDetail} />
      </Link>
      <DashboardOptButton label="Edit Beds" icon={IoBedOutline} />
      <DashboardOptButton label="Edit Rooms" icon={IoGridOutline} />
      {/* <DashboardOptButton
        label="Delete Property"
        icon={MdOutlineDeleteOutline}
      /> */}
    </SimpleGrid>
  );
};

export default PropertyCardFooter;
