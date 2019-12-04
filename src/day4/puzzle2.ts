import { MIN, MAX } from "./input";
import { getDigitAt, setDigitAt } from './number-tools';

let i:number = MIN;
let count:number = 0;

 whileLoop: while (i < MAX) {
  let doubles:number[] = [];
  for (let j = 1; j < 6; j++ ) {
    const currentDigit:number = getDigitAt(i, j);
    const prevDigit:number = getDigitAt(i, j-1);
    if (currentDigit > prevDigit) {
      i = setDigitAt(i, j-1, currentDigit);
      continue whileLoop;
    } else if (currentDigit === prevDigit) {
      doubles[currentDigit] = doubles[currentDigit] ? -1 : 1;
    }
    if (j === 5 && doubles.filter((flag:number) => flag > 0).length) {
      count++;
    }
  }
  i++;
 }

console.log(count);