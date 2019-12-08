import { getDigitAt } from './number-tools';

export const decodeInstruction = (
  instruction: number,
): [number, number, number, number] => [
  getDigitAt(instruction, 0),
  getDigitAt(instruction, 2),
  getDigitAt(instruction, 3),
  getDigitAt(instruction, 4),
];
