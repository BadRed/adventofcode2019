import { multiply } from './multiply';

describe('multiplication function', () => {
  it('perform addition in position mode', () => {
    const program: number[] = [2, 4, 5, 6, 10, 10, 0];
    expect(multiply(program, 0)).toEqual(4);
    expect(program).toEqual([2, 4, 5, 6, 10, 10, 100]);
  });

  it('perform addition in immediate mode', () => {
    const program: number[] = [1102, 4, 5, 6, 10, 10, 0];
    expect(multiply(program, 0)).toEqual(4);
    expect(program).toEqual([1102, 4, 5, 6, 10, 10, 20]);
  });

  it('perform addition in mixed mode', () => {
    const program: number[] = [1002, 4, 5, 6, 10, 10, 0];
    expect(multiply(program, 0)).toEqual(4);
    expect(program).toEqual([1002, 4, 5, 6, 10, 10, 50]);
  });
});
