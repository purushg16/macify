const today = new Date("2024-02-28");
today.setHours(12, 0, 0, 0);
const day = 24 * 60 * 60 * 1000;

const endDate = new Date(today.getTime() + 5 * day);
endDate.setHours(8);

const date0 = new Date(today.getTime() + 0 * day)
  .toDateString()
  .split(" ")
  .slice(1, 3)
  .join(" ");

const date1 = new Date(today.getTime() + 2 * day)
  .toDateString()
  .split(" ")
  .slice(1, 3)
  .join(" ");
const date2 = new Date(today.getTime() + 7 * day)
  .toDateString()
  .split(" ")
  .slice(1, 3)
  .join(" ");
const date3 = new Date(today.getTime() + 10 * day)
  .toDateString()
  .split(" ")
  .slice(1, 3)
  .join(" ");

export default {
  [date0]: {
    id: 213,
    start: today,
    end: new Date(today.getTime() + 1 * day), // Example: 2 days
    title: "Meeting 1",
  },

  [date1]: {
    id: 213,
    start: new Date(today.getTime() + 2 * day), // Example: 3 days after the first meeting
    end: endDate, // Example: 5 days after the first meeting
    title: "Conference",
  },
  [date2]: {
    id: 213,
    start: new Date(today.getTime() + 7 * day), // Example: 7 days after the second meeting
    end: new Date(today.getTime() + 9 * day), // Example: 9 days after the second meeting
    title: "Training Session",
  },
  [date3]: {
    id: 213,
    start: new Date(today.getTime() + 10 * day), // Example: 10 days after the third meeting
    end: new Date(today.getTime() + 12 * day), // Example: 12 days after the third meeting
    title: "Project Kickoff",
  },
};
