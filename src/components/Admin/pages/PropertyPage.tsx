import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PropertyPage = () => {
  return (
    <Link to="/admin/add/property">
      <Button> Add Property </Button>
    </Link>
  );
};

export default PropertyPage;
