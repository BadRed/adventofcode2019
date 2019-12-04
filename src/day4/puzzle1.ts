import { MIN, MAX } from "./input";
import { getDigitAt, setDigitAt } from './number-tools';

let i:number = MIN;
let count:number = 0;

 whileLoop: while (i < MAX) {
  let doubles = false;
  for (let j = 1; j < 6; j++ ) {
    const currentDigit:number = getDigitAt(i, j);
    const prevDigit:number = getDigitAt(i, j-1);
    if (currentDigit > prevDigit) {
      i = setDigitAt(i, j-1, currentDigit);
      continue whileLoop;
    } else if (currentDigit === prevDigit) {
      doubles = true;
    }
    if (j === 5 && doubles) {
      count++;
    }
  }
  i++;
 }

console.log(count);