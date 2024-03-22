import { FileWithPath } from "react-dropzone";
import CloudinaryResponse from "../entities/CloudinaryResponse";

const cloudinaryUpload = (files: FileWithPath[]) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("file", file); // Append each file with the key "file"
  });
  formData.append("upload_preset", "b4xppeg4");

  try {
    // Upload the image to Cloudinary
    const response = fetch(
      "https://api.cloudinary.com/v1_1/dlzkzqskt/image/upload/?folder=Daya",
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => res.json() as unknown as CloudinaryResponse);
    return response;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

export default cloudinaryUpload;
