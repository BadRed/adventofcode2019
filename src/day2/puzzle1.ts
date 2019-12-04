import { inputData } from "./input";
import { executeArray } from './execute-array';

const program = [...inputData];
program[1] = 12; // As per requirement
program[2] = 2;  // Same

executeArray(program);

console.log(program[0]);