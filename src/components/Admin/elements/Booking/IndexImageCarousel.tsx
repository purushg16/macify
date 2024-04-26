import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const IndexImageCarousel = ({
  imagesLen,
  callback,
}: {
  imagesLen: number;
  callback: (index: number) => void;
}) => {
  const [opacity, setOpacity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const mockImageUrls = [
    "https://psgroup.in/blog/wp-content/uploads/2021/01/Navyom-Living-dining.jpg",
    "https://psgroup.in/blog/wp-content/uploads/2020/12/Navyom-Living-dining-1024x683.jpg",
    "https://img.staticmb.com/mbimages/project/Photo_h310_w462/2021/01/08/Project-Photo-15-Navyom-Kolkata-5224935_600_800_310_462.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0.7); // Fade out

      setTimeout(() => {
        callback(
          currentImageIndex + 1 === imagesLen ? 0 : currentImageIndex + 1
        );
        setCurrentImageIndex(
          currentImageIndex + 1 === imagesLen ? 0 : currentImageIndex + 1
        );
        setOpacity(1); // Fade in
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [setCurrentImageIndex, currentImageIndex, callback, imagesLen]);

  return (
    <Box
      pos="absolute"
      w="100%"
      h="80vh"
      bgImg={mockImageUrls[currentImageIndex]}
      bgPos="center"
      bgSize="cover"
      zIndex={-1}
      opacity={opacity}
      transition="all 0.7s"
    />
  );
};

export default IndexImageCarousel;
