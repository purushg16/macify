export default function isFirstUpcoming(
  inputDate: string,
  dates: string[]
): boolean {
  const currentDate = new Date(inputDate);
  const today = new Date();

  for (const dateStr of dates) {
    const date = new Date(dateStr);
    if (date.getTime() <= today.getTime()) continue;
    if (date.getTime() < currentDate.getTime()) return false;
  }
  return true;
}
