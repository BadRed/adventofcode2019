import { decodeInstruction } from '../decode-instructrion';
const FRAME_SIZE = 4;

export const lessThan = (arr: number[], pos: number) => {
  const [command, param0, param1, destination]: number[] = arr.slice(
    pos,
    pos + FRAME_SIZE,
  );
  const [, flag0, flag1]: number[] = decodeInstruction(command); // We don't care about the command, only flags
  const param0actual = flag0 ? param0 : arr[param0];
  const param1actual = flag1 ? param1 : arr[param1];
  arr[destination] = param0actual < param1actual ? 1 : 0;
  return pos + FRAME_SIZE;
};
