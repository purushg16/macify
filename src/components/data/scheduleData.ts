const today = new Date("2024-02-11");

const date0 = new Date(today.getTime() + 0 * 24 * 60 * 60 * 1000)
  .toDateString()
  .split(" ")
  .slice(1, 3)
  .join(" ");

const date1 = new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000)
  .toDateString()
  .split(" ")
  .slice(1, 3)
  .join(" ");
const date2 = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
  .toDateString()
  .split(" ")
  .slice(1, 3)
  .join(" ");
const date3 = new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000)
  .toDateString()
  .split(" ")
  .slice(1, 3)
  .join(" ");

export default {
  [date0]: {
    id: 213,
    start: today,
    end: new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000), // Example: 2 days
    title: "Meeting 1",
  },

  [date1]: {
    id: 213,
    start: new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000), // Example: 3 days after the first meeting
    end: new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000), // Example: 5 days after the first meeting
    title: "Conference",
  },
  [date2]: {
    id: 213,
    start: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000), // Example: 7 days after the second meeting
    end: new Date(today.getTime() + 9 * 24 * 60 * 60 * 1000), // Example: 9 days after the second meeting
    title: "Training Session",
  },
  [date3]: {
    id: 213,
    start: new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000), // Example: 10 days after the third meeting
    end: new Date(today.getTime() + 12 * 24 * 60 * 60 * 1000), // Example: 12 days after the third meeting
    title: "Project Kickoff",
  },
};
