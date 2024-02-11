interface DateGeneratorProps {
  months: number;
}

const DateGenerator = ({ months }: DateGeneratorProps) => {
  const currentDate = new Date();
  const endDate = new Date(currentDate);
  endDate.setMonth(currentDate.getMonth() + months);

  const datesArray: Date[] = [];
  const currentDatePointer = new Date(currentDate);

  while (currentDatePointer <= endDate) {
    datesArray.push(new Date(currentDatePointer));
    currentDatePointer.setDate(currentDatePointer.getDate() + 1);
  }

  return datesArray;
};

export default DateGenerator;
