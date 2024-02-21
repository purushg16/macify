import { TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

interface StepProps {
  forward: () => void;
  backward: () => void;
}

interface StepperProps {
  children: ReactNode[];
  numberOfSteps: number;
}

const Stepper = ({ children, numberOfSteps }: StepperProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const forward = () => {
    if (currentStep < numberOfSteps - 1)
      setCurrentStep((prevStep) => prevStep + 1);
  };
  const backward = () => {
    if (currentStep != 0) setCurrentStep((prevStep) => prevStep - 1);
  };
  return (
    <Tabs index={currentStep} onChange={setCurrentStep}>
      <TabPanels>
        {React.Children.map(children, (child, index) => (
          <TabPanel key={index}>
            {React.isValidElement(child) &&
              React.cloneElement(child as React.ReactElement<StepProps>, {
                forward,
                backward,
              })}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default Stepper;
