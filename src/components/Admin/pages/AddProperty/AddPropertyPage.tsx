import Stepper from "../../elements/Stepper";
import AmenitiesPages from "./AmenitiesPages";
import CheckingTimePage from "./CheckingTimePage";
import ManagerPage from "./ManagerPage";
import NamePage from "./NamePage";
import PropertyAddressPage from "./PropertyAddressPage";
import RentalPage from "./RentalPage";
import RoomDetailsPage from "./RoomDetailsPage";
import SuccessfulPage from "./SuccessfulPage";

const AddPropertyPage = () => {
  return (
    <Stepper numberOfSteps={8}>
      <NamePage />
      <RentalPage />
      <RoomDetailsPage />
      <CheckingTimePage />
      <AmenitiesPages />
      <PropertyAddressPage />
      <ManagerPage />
      <SuccessfulPage />
    </Stepper>
  );
};

export default AddPropertyPage;
