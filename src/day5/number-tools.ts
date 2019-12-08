export const getDigitAt = (num: number, pos: number): number =>
  Math.floor(num / Math.pow(10, pos)) % 10;
export const incrementAt = (num: number, pos: number): number =>
  num + Math.pow(10, pos);
// Writing 'number' 4 times is the price I pay for type safety
// GOD I LOVE TYPESCRIPT SOMETIMES 🤨
export const setDigitAt = (
  num: number,
  pos: number,
  newDigit: number,
): number => num + (newDigit - getDigitAt(num, pos)) * Math.pow(10, pos);
