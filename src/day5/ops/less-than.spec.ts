import { lessThan } from './less-than';

describe('lessThan function', () => {
  it('work in position mode', () => {
    const program: number[] = [7, 4, 5, 6, 1, 2, -1];
    expect(lessThan(program, 0)).toEqual(4);
    expect(program).toEqual([7, 4, 5, 6, 1, 2, 1]);
  });

  it('work in immediate mode', () => {
    const program: number[] = [1107, 4, 5, 4, -1];
    expect(lessThan(program, 0)).toEqual(4);
    expect(program).toEqual([1107, 4, 5, 4, 1]);
  });

  it('work in mixed mode', () => {
    const program: number[] = [1007, 4, 5, 4, 4];
    expect(lessThan(program, 0)).toEqual(4);
    expect(program).toEqual([1007, 4, 5, 4, 1]);
  });

  it('work in mixed mode with more than', () => {
    const program: number[] = [1007, 4, 3, 4, 4];
    expect(lessThan(program, 0)).toEqual(4);
    expect(program).toEqual([1007, 4, 3, 4, 0]);
  });
});
