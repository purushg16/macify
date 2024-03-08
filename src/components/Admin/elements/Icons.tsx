import { Box } from "@chakra-ui/react";
import { Player } from "@lordicon/react";
import { useRef } from "react";

interface Props {
  icon: unknown;
  active?: boolean;
}

const IconWrapper = ({ icon, active = false }: Props) => {
  const playerRef = useRef<Player>(null);

  return (
    <Box
      cursor="pointer"
      onClick={() => {
        playerRef.current?.playFromBeginning();
      }}
      p={2}
      bg={active ? "primary.50" : "gray.50"}
      borderRadius={99}
    >
      <Player ref={playerRef} size={25} icon={icon} />
    </Box>
  );
};

export default IconWrapper;
