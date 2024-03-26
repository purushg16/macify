import {
  Flex,
  // Heading, Icon,
  Image,
} from "@chakra-ui/react";
import { PropertyBed } from "../../../entities/property";
// import { IoBedOutline } from "react-icons/io5";

const HotelBedCard = ({
  //   bed,
  groupId,
  img,
  group = false,
  defualt = true,
  onClick,
}: {
  bed: PropertyBed;
  groupId: number;
  img: string;
  onClick: (groupId: number | undefined) => void;
  group?: boolean;
  defualt?: boolean;
}) => {
  return (
    <Flex
      cursor="pointer"
      //   p={4}
      align="center"
      flexDir="column"
      //   bg="white"
      borderRadius={10}
      pos="relative"
      overflowY="clip"
      //   pb={12}
      transform={group ? "scale(1.1)" : "scale(1)"}
      transition="all 0.7s"
      opacity={defualt ? 1 : group ? 1 : 0.3}
      onClick={() => onClick(defualt ? groupId : undefined)}
    >
      {/* <Heading fontSize="md">{bed.bedNo}</Heading> */}
      <Image src={img} boxSize={150} borderRadius={20} />
      {/* <Icon as={IoBedOutline} boxSize={20} bottom={-8} /> */}
    </Flex>
  );
};

export default HotelBedCard;
