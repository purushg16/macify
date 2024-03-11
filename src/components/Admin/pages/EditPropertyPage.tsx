import { useParams } from "react-router-dom";
import { useGetSingleProperty } from "../../hooks/usePropertyServices";

const EditPropertyPage = () => {
  const id = useParams().id;

  const { data } = useGetSingleProperty(id!, !!id);
  console.log(data);

  return <div>EditPropertyPage</div>;
};

export default EditPropertyPage;
