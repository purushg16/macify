import GroupBooking from "../entities/GroupBooking";

export default [
  {
    _id: "1",
    property: {
      propertyName: "Sample Property 1",
    },
    bookings: [
      {
        checkIn: "2022-03-10",
      },
    ],
    paid: 500,
    balance: 200,
    approved: true,
    __v: 0,
    guestCount: 2,
  },
  {
    _id: "2",
    property: {
      propertyName: "Sample Property 2",
    },
    bookings: [
      {
        checkIn: "2022-05-20",
      },
    ],
    paid: 800,
    balance: 100,
    approved: false,
    __v: 0,
    guestCount: 1,
  },
] as GroupBooking[];
