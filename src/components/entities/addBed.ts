export default interface AddBedInteface {
  propertyId: string;
  roomId: string;
  bedsData: { id: string; bedNo: number }[];
}
