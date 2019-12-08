import { getDigitAt, incrementAt, setDigitAt } from './number-tools';

describe('Number tools', () => {
  describe('getDigitAt', () => {
    it('should return 3 for digit 1 of 1337', () => {
      expect(getDigitAt(1337, 1)).toEqual(3);
    });

    it('should return 0 for digit 4 of 100500', () => {
      expect(getDigitAt(100500, 4)).toEqual(0);
    });

    it('should not crash if asked for out of range number', () => {
      expect(getDigitAt(100, 4)).toEqual(0);
    });
  });

  describe('incrementAt', () => {
    it('should return 1338 for digit 0 of 1337', () => {
      expect(incrementAt(1337, 0)).toEqual(1338);
    });

    it('should return 0 for digit 4 of 100500', () => {
      expect(incrementAt(100400, 2)).toEqual(100500);
    });

    it('should increment even if original number didnt have it', () => {
      expect(incrementAt(500, 5)).toEqual(100500);
    });
  });

  describe('setDigitAt', () => {
    it('should set the right digit up', () => {
      expect(setDigitAt(1332, 0, 7)).toEqual(1337);
    });

    it('should set the right digit if its down', () => {
      expect(setDigitAt(100700, 2, 5)).toEqual(100500);
    });

    it('should set the digit that wasnt there', () => {
      expect(setDigitAt(500, 5, 1)).toEqual(100500);
    });
  });
});
