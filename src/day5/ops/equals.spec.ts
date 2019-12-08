import { equals } from './equals';

describe('lessThan function', () => {
  it('work in position mode', () => {
    const program: number[] = [8, 4, 5, 6, 1, 1, -1];
    expect(equals(program, 0)).toEqual(4);
    expect(program).toEqual([8, 4, 5, 6, 1, 1, 1]);
  });

  it('work in immediate mode', () => {
    const program: number[] = [1108, 4, 4, 4, -1];
    expect(equals(program, 0)).toEqual(4);
    expect(program).toEqual([1108, 4, 4, 4, 1]);
  });

  it('work in mixed mode', () => {
    const program: number[] = [1007, 4, 4, 4, 4];
    expect(equals(program, 0)).toEqual(4);
    expect(program).toEqual([1007, 4, 4, 4, 1]);
  });

  it('work in mixed mode with unequal values', () => {
    const program: number[] = [1007, 4, 3, 4, 4];
    expect(equals(program, 0)).toEqual(4);
    expect(program).toEqual([1007, 4, 3, 4, 0]);
  });
});
