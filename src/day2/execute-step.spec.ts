import { executeStep } from './execute-step';

describe('execute-step function', () => {
  let program: number[];

  beforeEach(() => {
    program = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
  });
  // Assert addition
  it('should execute addition', () => {
    expect(executeStep(program, 0)).toEqual(true);
    expect(program).toEqual([1, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]);
  });

  // Assert multiplication
  it('should execute multiplication', () => {
    expect(executeStep(program, 4)).toEqual(true);
    expect(program).toEqual([150, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50]);
  });

  // Assert terminaton
  it('should execute terminate command', () => {
    const programCopy: number[] = [...program];
    expect(executeStep(program, 8)).toEqual(false);
    expect(program).toEqual(programCopy);
  });

  // Assert unknown
  it('should throw on unknown command', () => {
    const programCopy: number[] = [...program];
    expect(() => executeStep(program, 1)).toThrow();
    expect(program).toEqual(programCopy);
  });
});
