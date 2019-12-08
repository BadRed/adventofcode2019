import { decodeInstruction } from './decode-instructrion';
import { add } from './ops/add';
import { multiply } from './ops/multiply';
import { input } from './ops/input';
import { output } from './ops/output';
import { IO } from './intcode.interfaces';
import { jumpIfTrue } from './ops/jump-if-true';
import { jumpIfFalse } from './ops/jump-if-false';
import { lessThan } from './ops/less-than';
import { equals } from './ops/equals';

export const FRAME_SIZE: number = 4;

const ADD: number = 1;
const MULTIPLY: number = 2;
const INPUT: number = 3;
const OUTPUT: number = 4;
const JUMP_IF_TRUE: number = 5;
const JUMP_IF_FALSE: number = 6;
const LESS_THAN: number = 7;
const EQUALS: number = 8;
const TERMINTATE: number = 9;

export const executeStep = (
  arr: number[],
  pos: number,
  io: IO = null,
): number => {
  const [command] = decodeInstruction(arr[pos]);
  switch (command) {
    case ADD:
      return add(arr, pos);
    case MULTIPLY:
      return multiply(arr, pos);
    case INPUT:
      return input(arr, pos, io);
    case OUTPUT:
      return output(arr, pos, io);
    case JUMP_IF_TRUE:
      return jumpIfTrue(arr, pos);
    case JUMP_IF_FALSE:
      return jumpIfFalse(arr, pos);
    case LESS_THAN:
      return lessThan(arr, pos);
    case EQUALS:
      return equals(arr, pos);
    case TERMINTATE:
      return -1;
    default:
      throw new Error('YOU DIED!');
  }
};
