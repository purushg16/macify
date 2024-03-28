export default function isFirstUpcoming(
  inputDate: string,
  dates: string[]
): boolean {
  const currentDate = new Date(inputDate).getTime();

  for (const dateStr of dates) {
    const date = new Date(dateStr);
    if (date.getTime() < currentDate) return false;
  }
  return true;
}
