import CreateBooking, {
  CustomerBookingGuestDetails,
} from "../entities/createBooking";
import useBookingRoomStore from "../store/bookingRoomStore";
import useBookingStore from "../store/bookingStore";

const useBookingConverter = (propertyId: string) => {
  const range = useBookingStore((s) => s.checkingRange);
  const rooms = useBookingRoomStore((s) => s.rooms);

  const bookings = rooms?.map((room) => {
    return {
      guests: room.guests as unknown as CustomerBookingGuestDetails[],
    };
  });

  const postData = {
    propertyId: propertyId,
    bookings: bookings!,
    checkIn: range.startDate!,
    checkOut: range.endDate!,
  } as CreateBooking;

  return postData;
};

export default useBookingConverter;
