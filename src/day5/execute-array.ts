import { executeStep } from './execute-step';
import { IO } from './intcode.interfaces';

export const executeArray = (arr: number[], io: IO = null) => {
  let pos: number = 0;
  while (pos >= 0) {
    pos = executeStep(arr, pos, io);
  }
  return arr;
};
