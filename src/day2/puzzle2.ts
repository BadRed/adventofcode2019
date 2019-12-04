import { inputData } from './input';
import { executeArray } from './execute-array';

const RESULT = 19690720;

//Take 1
let complexity1 = 0;
console.time('Execution of take 1');
outerLoop: for (let i = 0; i < 100; i++)
  for (let j = 0; j < 100; j++) {
    complexity1++;
    const arrCpy = [...inputData];
    arrCpy[1] = i;
    arrCpy[2] = j;
    executeArray(arrCpy);
    if (arrCpy[0] === RESULT) {
      console.log(`Solution: ${i}${j}`);
      console.log(`Complexity: ${complexity1}`);
      break outerLoop;
    }
  }
console.timeEnd('Execution of take 1');

//Take 2
let complexity2 = 0;
console.time('Execution of take 2');
outerLoop2: for (let i = 0; i < 100; i++)
  for (let j = 100; j > 0; j--) {
    complexity2++;
    const arrCpy = [...inputData];
    arrCpy[1] = i;
    arrCpy[2] = j;
    executeArray(arrCpy);
    if (arrCpy[0] < RESULT) {
        break; //Result will only get lower so it means we can skip this value of J
    }
    if (arrCpy[0] === RESULT) {
      console.log(`Solution: ${i}${j}`);
      console.log(`Complexity: ${complexity2}`);
      break outerLoop2;
    }
  }
console.timeEnd('Execution of take 2');

