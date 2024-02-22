import Stepper from "../../elements/Stepper";
import AmenitiesPages from "./AmenitiesPages";
import CheckingTimePage from "./CheckingTimePage";
import NamePage from "./NamePage";
import RentalPage from "./RentalPage";
import RoomDetailsPage from "./RoomDetailsPage";

const AddPropertyPage = () => {
  return (
    <Stepper numberOfSteps={5}>
      <NamePage />
      <RentalPage />
      <RoomDetailsPage />
      <CheckingTimePage />
      <AmenitiesPages />
    </Stepper>
  );
};

export default AddPropertyPage;
