const railwayTimeConverter = (time: string) => {
  const hour = time.split(":")[0];
  const minutes = time.split(":")[1];

  const hourInt = parseInt(hour);

  const railwayTime =
    hourInt - 12 <= 9 ? `0${hourInt - 12}` : `${hourInt - 12}`;

  if (hourInt === 0) return `12:${minutes} AM`;
  if (hourInt === 12) return `${hour}:${minutes} PM`;
  if (hourInt > 12) return `${railwayTime}:${minutes} PM`;
  return `${hour}:${minutes} AM`;
};
export default railwayTimeConverter;
