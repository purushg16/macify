import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  Heading,
} from "@chakra-ui/react";

const GuestIdProofImageAccordian = ({ image }: { image: string }) => {
  return (
    <Accordion allowMultiple w="100%">
      <AccordionItem border="none">
        <AccordionButton>
          <Heading fontSize="xs" textDecor="underline">
            Id Proof
          </Heading>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel p={4} bg="gray.50" borderRadius={20}>
          <Image src={image} alt="" pointerEvents="none" />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default GuestIdProofImageAccordian;
