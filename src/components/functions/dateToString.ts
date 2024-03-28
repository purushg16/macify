export default function formatDateToYYYYMMDD(date: Date | undefined): string {
  if (!date) return ``;
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}
