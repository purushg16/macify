export default function MobileNumberFormatter(number: string | number) {
  const numberStr = number.toString();

  return [
    `${numberStr.substring(0, 2)} ${numberStr.substring(2, 5)}`,
    `${numberStr.substring(5, 7)} ${numberStr.substring(7, 10)}`,
  ];
}
