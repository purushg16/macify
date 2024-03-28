import { useParams } from "react-router-dom";
import { useGetSingleProperty } from "../../hooks/usePropertyServices";
import EditPropertyWrapper from "../elements/EditProperty/EditPropertyWrapper";
import LoadingIndicator from "../elements/LoadingIndicator";

const EditPropertyPage = () => {
  const id = useParams().id;
  const { data: property } = useGetSingleProperty(id!, !!id);

  if (!property) return <LoadingIndicator text="Property" />;
  return <EditPropertyWrapper property={property} />;
};

export default EditPropertyPage;
