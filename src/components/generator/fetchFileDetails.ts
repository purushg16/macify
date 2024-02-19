import { FileWithPath } from "react-dropzone";
import Tesseract from "tesseract.js";

const fetchFileDetails = async (
  imageFiles: FileWithPath[]
): Promise<string[]> => {
  const imageTexts: string[] = await Promise.all(
    imageFiles.map(async (imageFile) => {
      const {
        data: { text },
      } = await Tesseract.recognize(imageFile, "eng");
      return text;
    })
  );

  return imageTexts;
};

export default fetchFileDetails;
