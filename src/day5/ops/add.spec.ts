import { add } from './add';

describe('addition function', () => {
  it('perform addition in position mode', () => {
    const program: number[] = [1, 4, 5, 6, 10, 10, 0];
    expect(add(program, 0)).toEqual(4);
    expect(program).toEqual([1, 4, 5, 6, 10, 10, 20]);
  });

  it('perform addition in immediate mode', () => {
    const program: number[] = [1101, 4, 5, 6, 10, 10, 0];
    expect(add(program, 0)).toEqual(4);
    expect(program).toEqual([1101, 4, 5, 6, 10, 10, 9]);
  });

  it('perform addition in mixed mode', () => {
    const program: number[] = [1001, 4, 5, 6, 10, 10, 0];
    expect(add(program, 0)).toEqual(4);
    expect(program).toEqual([1001, 4, 5, 6, 10, 10, 15]);
  });
});
