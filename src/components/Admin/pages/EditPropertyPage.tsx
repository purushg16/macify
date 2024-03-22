import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useGetSingleProperty } from "../../hooks/usePropertyServices";
import EditPropertyWrapper from "../elements/EditProperty/EditPropertyWrapper";

const EditPropertyPage = () => {
  const id = useParams().id;
  const { data: property } = useGetSingleProperty(id!, !!id);

  if (!property) return <Spinner />;
  return <EditPropertyWrapper property={property} />;
};

export default EditPropertyPage;
