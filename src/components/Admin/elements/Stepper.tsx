import {
  Button,
  Flex,
  HStack,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import AnimateMove from "../../motions/Move";

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
        {children.map((child, index) => (
          <TabPanel key={index} h="100%" p={0}>
            <Flex h="100%" flexDir="column" gap={8} alignItems="center">
              {child}
              <AnimateMove delay={0.8}>
                <HStack>
                  {currentStep != 0 && (
                    <Button onClick={backward} id="extra">
                      Back
                    </Button>
                  )}
                  <Button onClick={forward} id="extra" colorScheme="primary">
                    {currentStep + 1 == numberOfSteps ? "Finish" : "Next"}
                  </Button>
                </HStack>
              </AnimateMove>
            </Flex>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default Stepper;

// {React.isValidElement(child) &&
//   React.cloneElement(child as React.ReactElement<StepProps>, {
//     forward,
//     backward,
//   })}
