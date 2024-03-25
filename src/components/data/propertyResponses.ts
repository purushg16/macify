import PropertyRespone from "../entities/PropertyResponse";

export default [
  {
    _id: "property_id_1",
    propertyName: "Luxury Villa 1",
    propertyType: "villa",
    rentWithin: false,
    rooms: [
      {
        roomName: "Room 101",
        guestCapacity: 2,
        beds: [
          {
            bedNo: 1,
            _id: "bed1_id_1",
          },
        ],
        _id: "room1_id_1",
      },
      {
        roomName: "Room 102",
        guestCapacity: 3,
        beds: [
          {
            bedNo: 2,
            _id: "bed2_id_1",
          },
        ],
        _id: "room2_id_1",
      },
    ],
    __v: 0,
  },
  {
    _id: "property_id_2",
    propertyName: "Luxury Villa 2",
    propertyType: "villa",
    rentWithin: true,
    rooms: [
      {
        roomName: "Room 201",
        guestCapacity: 4,
        beds: [
          {
            bedNo: 1,
            _id: "bed1_id_2",
          },
          {
            bedNo: 2,
            _id: "bed2_id_2",
          },
        ],
        _id: "room1_id_2",
      },
    ],
    __v: 0,
  },
  {
    _id: "property_id_3",
    propertyName: "Luxury Villa 3",
    propertyType: "apartment",
    rentWithin: false,
    rooms: [
      {
        roomName: "Room 301",
        guestCapacity: 2,
        beds: [
          {
            bedNo: 1,
            _id: "bed1_id_3",
          },
          {
            bedNo: 2,
            _id: "bed2_id_3",
          },
        ],
        _id: "room1_id_3",
      },
      {
        roomName: "Room 302",
        guestCapacity: 3,
        beds: [
          {
            bedNo: 1,
            _id: "bed1_id_4",
          },
        ],
        _id: "room2_id_3",
      },
    ],
    __v: 0,
  },
  {
    _id: "property_id_hostel",
    propertyName: "Backpacker's Hostel",
    propertyType: "hostel",
    rentWithin: true,
    rooms: [
      {
        roomName: "Dormitory 1",
        guestCapacity: 8,
        beds: [
          {
            bedNo: 1,
            _id: "bed1_id_hostel",
          },
          {
            bedNo: 2,
            _id: "bed2_id_hostel",
          },
          {
            bedNo: 3,
            _id: "bed3_id_hostel",
          },
          {
            bedNo: 4,
            _id: "bed4_id_hostel",
          },
          {
            bedNo: 5,
            _id: "bed5_id_hostel",
          },
          {
            bedNo: 6,
            _id: "bed6_id_hostel",
          },
          {
            bedNo: 7,
            _id: "bed7_id_hostel",
          },
          {
            bedNo: 8,
            _id: "bed8_id_hostel",
          },
        ],
        _id: "room1_id_hostel",
      },
    ],
    __v: 0,
  },
] as PropertyRespone[];
