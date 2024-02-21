import Stepper from "../../elements/Stepper";
import NamePage from "./NamePage";
import RentalPage from "./RentalPage";

const AddPropertyPage = () => {
  return (
    <Stepper numberOfSteps={2}>
      <NamePage />
      <RentalPage />
    </Stepper>
  );
};

export default AddPropertyPage;
