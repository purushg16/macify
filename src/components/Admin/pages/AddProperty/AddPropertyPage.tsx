import Stepper from "../../elements/Stepper";
import CheckingTimePage from "./CheckingTimePage";
import NamePage from "./NamePage";
import RentalPage from "./RentalPage";
import RoomDetailsPage from "./RoomDetailsPage";

const AddPropertyPage = () => {
  return (
    <Stepper numberOfSteps={4}>
      <NamePage />
      <RentalPage />
      <RoomDetailsPage />
      <CheckingTimePage />
    </Stepper>
  );
};

export default AddPropertyPage;
