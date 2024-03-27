import { Flex, Image } from "@chakra-ui/react";
import { PropertyBed } from "../../../entities/property";

const HotelBedCard = ({
  img,
  groupId,
  group = false,
  defualt = true,
  onClick,
}: {
  bed: PropertyBed;
  img: string;
  onClick: (groupId: string | undefined) => void;
  groupId?: string;
  group?: boolean;
  defualt?: boolean;
}) => {
  return (
    <Flex
      //   p={4}
      //   bg="white"
      //   pb={12}
      cursor="pointer"
      align="center"
      flexDir="column"
      borderRadius={10}
      pos="relative"
      overflowY="clip"
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
