import { Box, Button } from "@chakra-ui/react";
import Stepper from "../../../elements/Stepper";

const AddPropertyPage = () => {
  return (
    <Stepper numberOfSteps={2}>
      <Step1 />
      <Step2 />
    </Stepper>
  );
};

export default AddPropertyPage;

const Step1 = ({
  forward,
  backward,
}: {
  backward?: () => void;
  forward?: () => void;
}) => {
  return (
    <Box>
      <Button onClick={backward}>back</Button>
      <Button onClick={forward}>Next</Button>
    </Box>
  );
};

const Step2 = ({
  backward,
  forward,
}: {
  forward?: () => void;
  backward?: () => void;
}) => {
  return (
    <Box>
      <Button onClick={backward}>Back</Button>
      <Button onClick={forward}>Finish</Button>
    </Box>
  );
};
