import { input } from './input';

describe('input function', () => {
  it('saves the value to the array', () => {
    const program: number[] = [3, 2, 0];
    const io = {
      input: 100,
    };
    expect(input(program, 0, io)).toEqual(2);
    expect(program).toEqual([3, 2, 100]);
  });
});
