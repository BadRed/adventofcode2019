import { decodeInstruction } from './decode-instructrion';

describe('decodeInstruction function', () => {
  it('correctly decode single digit instruction with only 2 flags', () => {
    expect(decodeInstruction(1104)).toEqual([4, 1, 1, 0]);
  });

  it('correctly decode single digit instruction with no flags', () => {
    expect(decodeInstruction(4)).toEqual([4, 0, 0, 0]);
  });

  it('correctly decode single digit instruction with 3 flags', () => {
    expect(decodeInstruction(10001)).toEqual([1, 0, 0, 1]);
  });
});
