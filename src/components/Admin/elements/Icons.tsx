import { Box, Text } from "@chakra-ui/react";
import { Player } from "@lordicon/react";
import { useEffect, useRef } from "react";

interface Props {
  icon: unknown;
  active?: boolean;
  bg: string;
  p?: number;
  color?: string;
  border?: number;
  count?: number;
}

const IconWrapper = ({
  count,
  icon,
  active = false,
  bg,
  p = 2,
  color = "black",
  border = 10,
}: Props) => {
  const playerRef = useRef<Player>(null);

  return (
    <Box
      cursor="pointer"
      onClick={() => {
        playerRef.current?.playFromBeginning();
      }}
      p={p}
      bg={active ? "primary.500" : bg}
      borderRadius={border}
      pos="relative"
    >
      <Text
        pos="absolute"
        fontSize="xs"
        right={-2}
        top={-2}
        bg="secondary.200"
        px={2}
        borderRadius={5}
        opacity={!active ? 1 : 0}
        transition="all 0.5s"
      >
        {count}
      </Text>

      <Player
        ref={playerRef}
        size={25}
        icon={icon}
        colorize={active ? "white" : color}
      />
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
