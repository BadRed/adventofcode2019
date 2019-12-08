import { IO } from '../intcode.interfaces';

const FRAME_SIZE = 2;

export const input = (arr: number[], pos: number, io: IO): number => {
  const [, destination] = arr.slice(pos, pos + FRAME_SIZE);
  arr[destination] = io.input;
  return pos + FRAME_SIZE;
};
