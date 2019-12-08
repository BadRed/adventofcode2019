import { jumpIfFalse } from './jump-if-false';

describe('jumpIfFalse function', () => {
  it('work in position mode', () => {
    const program: number[] = [8, 2, 0];
    expect(jumpIfFalse(program, 0)).toEqual(8);
  });

  it('work in absolute mode', () => {
    const program: number[] = [1108, 0, 9000];
    expect(jumpIfFalse(program, 0)).toEqual(9000);
  });

  it('work in mixed mode', () => {
    const program: number[] = [1008, 3, 9000, 0];
    expect(jumpIfFalse(program, 0)).toEqual(9000);
  });

  it('work in mixed mode with zeroes', () => {
    const program: number[] = [1008, 3, 9000, 123];
    expect(jumpIfFalse(program, 0)).toEqual(3);
  });
});
