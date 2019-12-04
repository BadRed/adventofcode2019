import { executeArray } from './execute-array';

describe('execute-array function', () => {
  let program: number[];

  beforeEach(() => {
    program = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
  });

  it('should run example programs', () => {
    executeArray(program);
    expect(program).toEqual([3500,9,10,70,2,3,11,0,99,30,40,50]);
  });

  it('should run another example program', () => {
    const program2: number[] = [1,1,1,4,99,5,6,0,99];
    executeArray(program2);
    expect(program2).toEqual([30,1,1,4,2,5,6,0,99]);
  });
});
