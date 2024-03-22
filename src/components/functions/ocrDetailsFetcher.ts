import { FileWithPath } from "react-dropzone";
import { createWorker } from "tesseract.js";
import Guest from "../entities/Guest";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const extractData = async (files: FileWithPath[]) => {
  const worker = await createWorker("eng");
  const resultData = [] as Guest[];

  try {
    for (const file of files) {
      const { data } = await worker.recognize(file);
      let result = data.text;
      const toOccurrence = result.indexOf("To");

      result =
        toOccurrence !== -1
          ? result.substring(result.indexOf("To") + 2)
          : result;

      if (result.includes("Aadhaar")) {
        const phoneRegex = /\b\d{10}\b/g;
        const dobRegex = /\b\d{2}\/\d{2}\/\d{4}\b/g;
        const genderRegex = /\b(MALE|FEMALE)\b/i;

        // Extract phone numbers
        const phoneNumbers = result.match(phoneRegex);
        const datesOfBirth = result.match(dobRegex);
        const gender = result.match(genderRegex);

        const lines = result.split("\n");

        // Loop through each line and find the first line that doesn't contain numbers or special characters
        let name = null;
        for (let i = 0; i < lines.length; i++) {
          // Check if the line contains "@ GovernmentiofIndiam"
          if (lines[i].includes("Government of")) {
            // Extract the name from two lines after
            name = lines[i + 2].trim();
            break;
          }
        }
        name = name?.replace(/^\s+|[0-9]/g, "");
        name = name?.split(" ").find((word) => word.length > 4);
        const age = calculateAge(datesOfBirth![0]);

        let splittedDate;
        if (datesOfBirth) {
          splittedDate = moment(datesOfBirth[0], "DD/MM/YYYY").toDate();
        }

        resultData.push({
          id: uuidv4(),
          guestName: name || "",
          age: age!,
          phone: phoneNumbers ? parseInt(phoneNumbers[0]) : parseInt(""),
          dob: splittedDate!,
          gender: gender ? gender[0] : null,
          idProof: "",
          idProofType: "aadhar",
        });
      } else {
        const genderRegex = /\b(M|F)\b/i;
        const genderMatch = result.match(genderRegex)!;
        let gender = null;

        if (genderMatch) {
          if (genderMatch[0] === "M") {
            gender = "Male";
          }
          if (genderMatch[0] === "F") {
            gender = "Female";
          }
        }

        // Regular expression pattern to match date of birth (DOB)
        const dobRegex = /(\d{2}\/\d{2}\/\d{4})/;

        // Extract DOB and name from the data
        const dobMatch = result.match(dobRegex);
        const dob = dobMatch![1];

        let splittedDate;
        if (dob) splittedDate = moment(dob, "DD/MM/YYYY").toDate();

        const lines = result.trim().split("\n");
        // Extract the name from the 5th line
        const line = lines[3].trim();
        const words = line.split(" ");
        // Filter out words with more than 4 characters
        const name = words.filter((word) => word.length > 4);

        console.log("Name:", name[0]);

        const age = calculateAge(dob);
        console.log("Age:", age);

        resultData.push({
          id: uuidv4(),
          guestName: name[0] || "",
          age: age!,
          phone: parseInt(""),
          dob: splittedDate!,
          gender: gender,
          idProof: "",
          idProofType: "passport",
        });
      }
    }
  } finally {
    await worker.terminate();
  }

  return resultData;
};

// Function to calculate age
function calculateAge(dateOfBirth: string) {
  // Split the date of birth string by '/' or '-'
  const parts = dateOfBirth.split(/[\\/-]/);

  // Check if the date string has three parts (day, month, year)
  if (parts.length === 3) {
    // Extract day, month, and year components
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // Months are zero-based in JavaScript Date objects
    const year = parseInt(parts[2]);

    // Create a new Date object with the parsed components
    const dob = new Date(year, month, day);

    // Check if the parsed date is valid
    if (isNaN(dob.getTime())) {
      throw new Error("Invalid date of birth");
    }

    // Get the current date
    const currentDate = new Date();

    // Calculate the age
    let age = currentDate.getFullYear() - dob.getFullYear();

    // Check if the birthday has occurred this year
    if (
      currentDate.getMonth() < dob.getMonth() ||
      (currentDate.getMonth() === dob.getMonth() &&
        currentDate.getDate() < dob.getDate())
    ) {
      age--;
    }

    return age;
  }
}

export default extractData;
