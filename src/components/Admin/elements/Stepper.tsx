import { Flex, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
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
    <Tabs index={currentStep} onChange={setCurrentStep} h="100%" p={0}>
      <TabPanels h="100%" p={0}>
        {React.Children.map(children, (child, index) => (
          <TabPanel key={index} h="100%" p={0}>
            <Flex h="100%" flexDir="column" gap={8} alignItems="center">
              {React.isValidElement(child) &&
                React.cloneElement(child as React.ReactElement<StepProps>, {
                  forward,
                  backward,
                })}
            </Flex>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default Stepper;
