import { Box } from "@chakra-ui/react";
import { Player } from "@lordicon/react";
import { useRef } from "react";

const IconWrapper = ({ icon }: { icon: unknown }) => {
  const playerRef = useRef<Player>(null);

  return (
    <Box
      cursor="pointer"
      onClick={() => {
        playerRef.current?.playFromBeginning();
      }}
      p={2}
      bg="gray.50"
      borderRadius={99}
    >
      <Player ref={playerRef} size={25} icon={icon} />
    </Box>
  );
};

export default IconWrapper;
