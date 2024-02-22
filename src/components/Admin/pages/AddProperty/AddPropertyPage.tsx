import Stepper from "../../elements/Stepper";
import NamePage from "./NamePage";
import RentalPage from "./RentalPage";
import RoomDetailsPage from "./RoomDetailsPage";

const AddPropertyPage = () => {
  return (
    <Stepper numberOfSteps={3}>
      <NamePage />
      <RentalPage />
      <RoomDetailsPage />
    </Stepper>
  );
};

export default AddPropertyPage;
