import { jumpIfTrue } from './jump-if-true';

describe('jumpIfTrue function', () => {
  it('work in position mode', () => {
    const program: number[] = [8, 0, 0];
    expect(jumpIfTrue(program, 0)).toEqual(8);
  });

  it('work in absolute mode', () => {
    const program: number[] = [1108, 100, 9000];
    expect(jumpIfTrue(program, 0)).toEqual(9000);
  });

  it('work in mixed mode', () => {
    const program: number[] = [1008, 2, 9000];
    expect(jumpIfTrue(program, 0)).toEqual(9000);
  });

  it('work in mixed mode with zeroes', () => {
    const program: number[] = [1008, 3, 9000, 0];
    expect(jumpIfTrue(program, 0)).toEqual(3);
  });
});
