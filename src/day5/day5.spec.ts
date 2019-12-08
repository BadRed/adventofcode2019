import { puzzle1 } from './puzzle1';
import { IO } from './intcode.interfaces';
import { executeArray } from './execute-array';

describe('day 5', () => {
  describe('task 1', () => {
    let program: number[];
    beforeEach(() => {
      program = [...puzzle1];
    });

    it('should run diagnostics code 1', () => {
      const io: IO = {
        input: 1,
        output: null,
      };
      executeArray(program, io);
      expect(io.output).toEqual(7692125); //Our solution will be in this test!
    });
  });

  describe('task 2', () => {
    let program: number[];
    beforeEach(() => {
      program = [...puzzle1];
    });

    it('should run diagnostics code 1', () => {
      const io: IO = {
        input: 5,
        output: null,
      };
      executeArray(program, io);
      expect(io.output).toEqual(14340395); //Our solution for task 2 will be in this test!
    });
  });
});
