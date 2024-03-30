const durationCalculator = (startTime: number, endTime: number) => {
  const hoursDuration = Math.ceil((endTime - startTime) / (60 * 60 * 1000));

  // console.log(2 - (24 - (22 % 24)) * 0.1);
  // console.log(29 % 24);

  const dayDuration = Math.ceil((endTime - startTime) / (24 * 60 * 60 * 1000));

  if (hoursDuration % 24 == 0) return dayDuration * 2;
  else if (hoursDuration % 24 > 24)
    return dayDuration + (hoursDuration % 24) * 0.1;
  else return dayDuration * 2 - (24 - (hoursDuration % 24)) * 0.1; // four different check in/out times

  // 25 => + 0.1
  // 24 => - 0
  // 23 => - 1.9
  // 22 => - 1.8
};

function daysBetweenDates(date1: Date, date2: Date) {
  // Convert both dates to milliseconds
  const date1_ms = date1.getTime();
  const date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  const difference_ms = Math.abs(date2_ms - date1_ms);

  // Convert the difference from milliseconds to days
  const differenceDays = Math.ceil(difference_ms / (1000 * 60 * 60 * 24));

  return differenceDays;
}

export { durationCalculator, daysBetweenDates };
