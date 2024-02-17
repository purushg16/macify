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

export { durationCalculator };
