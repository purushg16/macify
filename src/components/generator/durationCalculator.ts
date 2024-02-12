const durationCalculator = (startTime: number, endTime: number) =>
  Math.ceil((endTime - startTime) / (24 * 60 * 60 * 1000));

export { durationCalculator };
