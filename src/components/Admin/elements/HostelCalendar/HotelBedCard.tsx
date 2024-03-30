import { Flex, Heading, Image } from "@chakra-ui/react";
import { PropertyBed } from "../../../entities/property";

const HotelBedCard = ({
  isOccupied,
  image,
  gender,
  bed,
  groupId,
  group = false,
  defualt = true,
  onClick,
}: {
  image: string;
  bed: PropertyBed;
  isOccupied: boolean;
  gender: string | undefined;
  onClick: (groupId: string | undefined) => void;
  groupId?: string;
  group?: boolean;
  defualt?: boolean;
}) => {
  return (
    <Flex
      p={4}
      pt={6}
      bg="white"
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
      {isOccupied && (
        <>
          <Image
            pos="absolute"
            top={3}
            src={"https://img.icons8.com/ios-filled/15/sleep.png"}
            alt="sleep"
          />
          {gender && gender === "male" && (
            <Image
              src="https://img.icons8.com/color/15/male.png"
              alt="male"
              pos="absolute"
              right={2}
              top={2}
            />
          )}
          {gender && gender === "female" && (
            <Image
              src="https://img.icons8.com/office/15/female.png"
              alt="male"
              pos="absolute"
              right={2}
              top={2}
            />
          )}
        </>
      )}

      <Image src={image} alt="bed" w="100px" />
      <Heading fontSize="xs" color="gray" mt={2}>
        Bed {bed.bedNo}
      </Heading>
    </Flex>
  );
};

export default HotelBedCard;
