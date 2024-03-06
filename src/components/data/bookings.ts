const today = new Date("2024-03-06");
today.setHours(12, 0, 0, 0);
const day = 24 * 60 * 60 * 1000;

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
    checkOut: new Date(today.getTime() + 1 * day), // Example: 2 days
    title: "Meeting 1",
  },

  [date1]: {
    id: 213,
    checkIn: new Date(today.getTime() + 2 * day), // Example: 3 days after the first meeting
    checkOut: endDate, // Example: 5 days after the first meeting
    title: "Conference",
  },
  [date2]: {
    id: 213,
    checkIn: new Date(today.getTime() + 7 * day), // Example: 7 days after the second meeting
    checkOut: new Date(today.getTime() + 9 * day), // Example: 9 days after the second meeting
    title: "Training Session",
  },
  [date3]: {
    id: 213,
    checkIn: new Date(today.getTime() + 10 * day), // Example: 10 days after the third meeting
    checkOut: new Date(today.getTime() + 12 * day), // Example: 12 days after the third meeting
    title: "Project Kickoff",
  },
};
