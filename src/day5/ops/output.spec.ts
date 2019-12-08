import { output } from './output';
import { IO } from '../intcode.interfaces';

describe('output function', () => {
  it('outputs the value to the array', () => {
    const program: number[] = [1, 2, 3, 0, 4, 6, 100];
    const io: IO = {
      input: -1,
    };
    expect(output(program, 4, io)).toEqual(6);
    expect(io).toEqual({
      input: -1,
      output: 100,
    });
  });

  it('outputs the value in immediate mode', () => {
    const program: number[] = [1, 2, 3, 0, 104, 113, 100];
    const io: IO = {
      input: -1,
    };
    expect(output(program, 4, io)).toEqual(6);
    expect(io).toEqual({
      input: -1,
      output: 113,
    });
  });
});
