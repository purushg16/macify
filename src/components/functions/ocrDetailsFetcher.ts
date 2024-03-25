import { createWorker } from "tesseract.js";
import Guest from "../entities/Guest";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const extractData = async (file: string) => {
  const worker = await createWorker("eng");

  try {
    const { data } = await worker.recognize(file);
    let result = data.text;
    const toOccurrence = result.indexOf("To");

    result =
      toOccurrence !== -1 ? result.substring(result.indexOf("To") + 2) : result;

    if (result.includes("Aadhaar")) {
      const phoneRegex = /\b\d{10}\b/g;
      const dobRegex = /\b\d{2}\/\d{2}\/\d{4}\b/g;
      const genderRegex = /\b(MALE|FEMALE)\b/i;

      const phoneNumbers = result.match(phoneRegex);
      const datesOfBirth = result.match(dobRegex);
      const gender = result.match(genderRegex);

      const lines = result.split("\n");

      let name = null;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes("Government of")) {
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

      return {
        id: uuidv4(),
        guestName: name || "",
        age: age!,
        phone: phoneNumbers ? parseInt(phoneNumbers[0]) : parseInt(""),
        dob: splittedDate!,
        gender: gender ? gender[0] : null,
        idProof: file,
        idProofType: "aadhar",
      } as Guest;
    } else {
      const genderRegex = /\b(M|F)\b/i;
      const genderMatch = result.match(genderRegex)!;
      let gender = null;

      if (genderMatch) {
        if (genderMatch[0] === "M") {
          gender = "male";
        }
        if (genderMatch[0] === "F") {
          gender = "female";
        }
      }

      const dobRegex = /(\d{2}\/\d{2}\/\d{4})/;
      const dobMatch = result.match(dobRegex);
      const dob = dobMatch![1];

      let splittedDate;
      if (dob) splittedDate = moment(dob, "DD/MM/YYYY").toDate();

      const lines = result.trim().split("\n");
      const line = lines[3].trim();
      const words = line.split(" ");
      const name = words.filter((word) => word.length > 4);
      const age = calculateAge(dob);

      return {
        id: uuidv4(),
        guestName: name[0] || "",
        age: age!,
        phone: parseInt(""),
        dob: splittedDate!,
        gender: gender,
        idProof: file,
        idProofType: "passport",
      } as Guest;
    }
  } finally {
    await worker.terminate();
  }
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
