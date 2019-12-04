export const FRAME_SIZE:number = 4;

const ADD: number = 1;
const MULTIPLY: number = 2;
const TERMINTATE: number = 99;


export const executeStep = (arr: number[], pos: number): boolean => {
  const [command, verb, noun, destination]: number[] = arr.slice(pos, pos + FRAME_SIZE);
  switch (command) {
    case ADD:
      arr[destination] = arr[verb] + arr[noun];
      return true;
    case MULTIPLY:
      arr[destination] = arr[verb] * arr[noun];
      return true;
    case TERMINTATE:
      return false;
    default:
      throw new Error('YOU DIED!');
  }
};
