import { IO } from '../intcode.interfaces';
import { decodeInstruction } from '../decode-instructrion';

const FRAME_SIZE = 2;

export const output = (arr: number[], pos: number, io: IO): number => {
  const [command, src] = arr.slice(pos, pos + FRAME_SIZE);
  const [, flag0] = decodeInstruction(command);
  io.output = flag0 ? src : arr[src];
  return pos + FRAME_SIZE;
};
