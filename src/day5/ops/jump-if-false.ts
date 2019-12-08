import { decodeInstruction } from '../decode-instructrion';
const FRAME_SIZE = 3;

export const jumpIfFalse = (arr: number[], pos: number) => {
  const [command, ifCheck, destination]: number[] = arr.slice(
    pos,
    pos + FRAME_SIZE,
  );
  const [, flag0, flag1]: number[] = decodeInstruction(command); // We don't care about the command, only flags
  const valueToCheck = flag0 ? ifCheck : arr[ifCheck];
  return !valueToCheck
    ? flag1
      ? destination
      : arr[destination]
    : pos + FRAME_SIZE;
};
