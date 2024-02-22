import Stepper from "../../elements/Stepper";
import AmenitiesPages from "./AmenitiesPages";
import CheckingTimePage from "./CheckingTimePage";
import NamePage from "./NamePage";
import PropertyAddressPage from "./PropertyAddressPage";
import RentalPage from "./RentalPage";
import RoomDetailsPage from "./RoomDetailsPage";

const AddPropertyPage = () => {
  return (
    <Stepper numberOfSteps={6}>
      <NamePage />
      <RentalPage />
      <RoomDetailsPage />
      <CheckingTimePage />
      <AmenitiesPages />
      <PropertyAddressPage />
    </Stepper>
  );
};

export default AddPropertyPage;
