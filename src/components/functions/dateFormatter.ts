export default function DateFormatter(dateString: Date) {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return formattedDate;
}
