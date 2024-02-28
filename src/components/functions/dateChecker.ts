function isDateBetween(startDate: Date, endDate: Date) {
  const currentDate = new Date().toJSON().slice(0, 10);
  const today = new Date(currentDate);

  return (
    (startDate.getTime() <= today.getTime() &&
      today.getTime() <= endDate.getTime()) ||
    currentDate === startDate.toJSON().slice(0, 10)
  );
}

export { isDateBetween };
