import { decodeInstruction } from '../decode-instructrion';

const FRAME_SIZE = 4;

export const multiply = (arr: number[], pos: number) => {
  const [command, verb, noun, destination]: number[] = arr.slice(
    pos,
    pos + FRAME_SIZE,
  );
  const [, flag0, flag1]: number[] = decodeInstruction(command);
  arr[destination] = (flag0 ? verb : arr[verb]) * (flag1 ? noun : arr[noun]);
  return pos + FRAME_SIZE;
};
