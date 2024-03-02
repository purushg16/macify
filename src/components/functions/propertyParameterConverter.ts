import { PropertyService } from "../api/property-client";
import useAddPropertyStore from "../store/AddProperty/addPropertyBasicStore";
import useAddPropertyRoomStore from "../store/AddProperty/addPropertyRoomStore";
import railwayTimeConverter from "./railwayTimeConverter";

export default function PropertyConverter() {
  const propertyName = useAddPropertyStore((s) => s.propertyName);
  const propertyType = useAddPropertyStore((s) => s.propertyType);
  const rentWithin = useAddPropertyStore((s) => s.rentWithin);
  const amenities = useAddPropertyStore((s) => s.amenities);
  const address = useAddPropertyStore((s) => s.address);
  const country = useAddPropertyStore((s) => s.country);
  const city = useAddPropertyStore((s) => s.city);
  const zipcode = useAddPropertyStore((s) => s.zipcode);
  const manager = useAddPropertyStore((s) => s.manager);
  const checkIn = useAddPropertyStore((s) => s.checkIn);
  const checkOut = useAddPropertyStore((s) => s.checkOut);
  const rooms = useAddPropertyRoomStore((s) => s.rooms);

  const property = {
    propertyName,
    propertyType,
    rentWithin,
    amenities,
    address,
    country,
    city,
    zipcode,
    manager,
    checkIn: railwayTimeConverter(checkIn!),
    checkOut: railwayTimeConverter(checkOut!),
    rooms: rooms?.map((room) => ({
      ...room,
      beds:
        propertyType === "hostel"
          ? Array.from({ length: room.guestCapacity }, (_, index) => ({
              bedNo: `${index + 1}`,
            }))
          : [],
    })),
  } as PropertyService;

  return property;
}
