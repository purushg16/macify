import Stepper from "../../elements/Stepper";
import IndividualRoomDetails from "./IndividualRoomDetails";
import NamePage from "./NamePage";
import RentalPage from "./RentalPage";
import RoomDetailsPage from "./RoomDetailsPage";

const AddPropertyPage = () => {
  return (
    <Stepper numberOfSteps={4}>
      <NamePage />
      <RentalPage />
      <RoomDetailsPage />
      <IndividualRoomDetails />
    </Stepper>
  );
};

export default AddPropertyPage;
