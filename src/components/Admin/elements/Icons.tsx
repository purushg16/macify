import { Box } from "@chakra-ui/react";
import { Player } from "@lordicon/react";
import { useEffect, useRef } from "react";

interface Props {
  icon: unknown;
  active?: boolean;
  p?: number;
}

const IconWrapper = ({ icon, active = false, p = 2 }: Props) => {
  const playerRef = useRef<Player>(null);

  return (
    <Box
      cursor="pointer"
      onClick={() => {
        playerRef.current?.playFromBeginning();
      }}
      p={p}
      bg={active ? "primary.50" : "none"}
      borderRadius={99}
    >
      <Player ref={playerRef} size={25} icon={icon} />
    </Box>
  );
};

const NormalWrapper = ({ icon }: Props) => {
  const playerRef = useRef<Player>(null);
  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);
  return <Player ref={playerRef} size={25} icon={icon} />;
};

export { NormalWrapper };

export default IconWrapper;
