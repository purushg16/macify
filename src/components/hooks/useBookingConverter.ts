import Guest from "../entities/Guest";
import CreateBooking, {
  CustomerBookingGuest,
  CustomerBookingGuestDetails,
} from "../entities/createBooking";
import { PropertyType } from "../store/AddProperty/addPropertyBasicStore";
import useBookingRoomStore from "../store/bookingRoomStore";
import useBookingStore from "../store/bookingStore";

const useBookingConverter = (
  propertyId: string,
  propertyType: PropertyType,
  rentWithin: boolean,
  guests: Guest[]
) => {
  const range = useBookingStore((s) => s.checkingRange);
  const rooms = useBookingRoomStore((s) => s.rooms);

  const hostelBookings = guests.map((guest) => {
    return {
      guests: [guest] as CustomerBookingGuestDetails[],
    };
  }) as CustomerBookingGuest[];

  const rentWithinBookings = [
    { guests: guests as CustomerBookingGuestDetails[] },
  ] as CustomerBookingGuest[];

  const otherBookings = rooms?.map((room) => {
    return {
      guests: room.guests as CustomerBookingGuestDetails[],
    };
  }) as CustomerBookingGuest[];

  const postData = {
    propertyId: propertyId,
    bookings:
      propertyType === "hostel"
        ? hostelBookings
        : !rentWithin
        ? rentWithinBookings
        : otherBookings,
    checkIn: range.startDate!,
    checkOut: range.endDate!,
  } as CreateBooking;

  return postData;
};

export default useBookingConverter;
