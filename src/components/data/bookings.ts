const today = new Date("2024-03-06");
today.setHours(12);
const day = 24 * 60 * 60 * 1000;

const nextDay = new Date(today.getTime() + 1 * day);
nextDay.setHours(12);

const endDate = new Date(today.getTime() + 5 * day);
endDate.setHours(8);

const date0 = new Date(today.getTime() + 0 * day)
  .toISOString()
  .substring(0, 10);
const date1 = new Date(today.getTime() + 2 * day)
  .toISOString()
  .substring(0, 10);
const date2 = new Date(today.getTime() + 7 * day)
  .toISOString()
  .substring(0, 10);
const date3 = new Date(today.getTime() + 10 * day)
  .toISOString()
  .substring(0, 10);

export default {
  [date0]: {
    id: 213,
    checkIn: today,
    checkOut: nextDay, // Example: 2 days
    room: "",
    bed: "",
    approve: true,
    guests: [
      {
        guestName: "string",
        age: 2,
        address: "string",
        idProofType: "string",
        idProof: "string",
        _id: "string",
      },
    ],
    property: "",
    _id: "",
  },

  [date1]: {
    id: 213,
    checkIn: new Date(today.getTime() + 2 * day), // Example: 3 days after the first meeting
    checkOut: endDate, // Example: 5 days after the first meeting
    title: "Conference",
    approve: true,
    guests: [],
    property: "",
    _id: "",
  },
  [date2]: {
    id: 213,
    checkIn: new Date(today.getTime() + 7 * day), // Example: 7 days after the second meeting
    checkOut: new Date(today.getTime() + 9 * day), // Example: 9 days after the second meeting
    room: "",
    bed: "",
    approve: true,
    guests: [
      {
        guestName: "string",
        age: 2,
        address: "string",
        idProofType: "string",
        idProof: "string",
        _id: "string",
      },
    ],
    property: "",
    _id: "",
  },
  [date3]: {
    id: 213,
    checkIn: new Date(today.getTime() + 10 * day), // Example: 10 days after the third meeting
    checkOut: new Date(today.getTime() + 12 * day), // Example: 12 days after the third meeting
    room: "",
    bed: "",
    approve: true,
    guests: [
      {
        guestName: "string",
        age: 2,
        address: "string",
        idProofType: "string",
        idProof: "string",
        _id: "string",
      },
    ],
    property: "",
    _id: "",
  },
};
