import { executeStep, FRAME_SIZE } from "./execute-step";

export const executeArray = (arr: number[]) => {
    let i:number = 0;
    while (executeStep(arr, i)) {
      i += FRAME_SIZE;
    }
    return arr;
  }