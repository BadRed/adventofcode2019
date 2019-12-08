import { executeArray } from './execute-array';
import { IO } from './intcode.interfaces';

describe('execute-array function', () => {
  let program: number[];

  beforeEach(() => {
    program = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
  });

  it('should run example programs', () => {
    executeArray(program);
    expect(program).toEqual([3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]);
  });

  it('should run another example program', () => {
    const program2: number[] = [1, 1, 1, 4, 99, 5, 6, 0, 99];
    executeArray(program2);
    expect(program2).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
  });

  it('should run equal program test', () => {
    const programEq: number[] = [3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8];
    const io: IO = {
      input: 8,
    };
    executeArray(programEq, io);
    expect(io.output).toEqual(1);
  });

  it('should run equal program test 2', () => {
    const programEq: number[] = [3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8];
    const io: IO = {
      input: 999,
    };
    executeArray(programEq, io);
    expect(io.output).toEqual(0);
  });

  it('should run lt program test', () => {
    const programLt: number[] = [3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8];
    const io: IO = {
      input: 5,
    };
    executeArray(programLt, io);
    expect(io.output).toEqual(1);
  });

  it('should run jump test', () => {
    const programJump: number[] = [
      3,
      12,
      6,
      12,
      15,
      1,
      13,
      14,
      13,
      4,
      13,
      99,
      -1,
      0,
      1,
      9,
    ];
    const io: IO = {
      input: 0,
    };
    executeArray(programJump, io);
    expect(io.output).toBe(0);
  });

  it('should run immediate mode', () => {
    const programImmediate: number[] = [3, 3, 1108, -1, 8, 3, 4, 3, 99];
    const io: IO = {
      input: 8,
    };
    executeArray(programImmediate, io);
    expect(io.output).toBe(1);
  });

  it('should run immedate mode with jumps', () => {
    const programImmediate2: number[] = [
      3,
      3,
      1105,
      -1,
      9,
      1101,
      0,
      0,
      12,
      4,
      12,
      99,
      1,
    ];
    const io: IO = {
      input: 0,
    };
    executeArray(programImmediate2, io);
    expect(io.output).toBe(0);
  });

  describe('large test', () => {
    let programLarge: number[];

    it('should run a large test with lt8', () => {
      programLarge = [
        3,
        21,
        1008,
        21,
        8,
        20,
        1005,
        20,
        22,
        107,
        8,
        21,
        20,
        1006,
        20,
        31,
        1106,
        0,
        36,
        98,
        0,
        0,
        1002,
        21,
        125,
        20,
        4,
        20,
        1105,
        1,
        46,
        104,
        999,
        1105,
        1,
        46,
        1101,
        1000,
        1,
        20,
        4,
        20,
        1105,
        1,
        46,
        98,
        99,
      ];
      const io: IO = {
        input: 5,
      };
      executeArray(programLarge, io);
      expect(io.output).toEqual(999);
    });
  });
});
