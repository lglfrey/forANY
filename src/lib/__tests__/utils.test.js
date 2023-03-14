import {
  roundToTwo,
  formatSpacesThousands,
  minTwoDigits,
  differenceInDays,
  formatDate,
  getDayAddition,
  numberWithSpaces,
  roundTONearestInteger
} from '../utils';

describe('Utils test', () => {
  describe('formatSpacesThousands', () => {
    test('check if large number formatted with spaces correctly', () => {
      const result = formatSpacesThousands(23000000);
      expect(result).toBe('23 000 000');
    });

    test('check if giving empty string value returns undefined', () => {
      const result = formatSpacesThousands('');
      expect(result).toBe(undefined);
    });

    test('check if giving empty value returns undefined', () => {
      const result = formatSpacesThousands();
      expect(result).toBe(undefined);
    });

    test('check if giving string non number value 90000000album returns undefined', () => {
      const result = formatSpacesThousands('90000000album');
      expect(result).toBe(undefined);
    });

    test('check if giving short number 72 returns without spaces', () => {
      const result = formatSpacesThousands(72);
      expect(result).toBe('72');
    });

    test('check if giving short number 720 returns without spaces', () => {
      const result = formatSpacesThousands(720);
      expect(result).toBe('720');
    });

    test('check if giving short number 7205 returns with spaces', () => {
      const result = formatSpacesThousands(7205);
      expect(result).toBe('7 205');
    });

    test('check if giving negative value returns negative formatted value', () => {
      const result = formatSpacesThousands(-623005001);
      expect(result).toBe('-623 005 001');
    });

    test('check if giving too large numer formatted in special format', () => {
      const result = formatSpacesThousands(999999999999);
      expect(result).toBe('999 999 999 999');
    });
  });

  describe('roundToTwo', () => {
    test('check if it round to two indeed', () => {
      const result = roundToTwo(123.55634354);
      expect(result).toBe(123.56);
    });
  });

  describe('minTwoDigits', () => {
    test('check if it returns 2 digits if given one digit', () => {
      const result = minTwoDigits(4);
      expect(result).toBe('04');
    });

    test('check if it returns 2 digits if given 2 digits', () => {
      const result = minTwoDigits(45);
      expect(result).toBe('45');
    });

    test('check if it returns 3 digits if given 3 digits', () => {
      const result = minTwoDigits(457);
      expect(result).toBe('457');
    });
  });

  describe('differenceInDays', () => {
    test('check if it calculates how much days between two dates', () => {
      const result = differenceInDays(new Date('1988-03-07'), new Date('2022-06-10'));
      expect(result).toBe(12513);
    });
  });

  describe('formatDate', () => {
    test('check if it formats the date correctly', () => {
      const result = formatDate(new Date('2022-03-07'));
      expect(result).toBe('7/03/2022');
    });
    test('check if it formats the date correctly', () => {
      const result = formatDate(new Date('2022'));
      expect(result).toBe('1/01/2022');
    });
    test('check if it formats the date correctly', () => {
      const result = formatDate(new Date('0'));
      expect(result).toBe('1/01/2000');
    });
  });

  describe('getDayAddition', () => {
    test('check if it not misspells how much days correctly', () => {
      const result = getDayAddition(1);
      expect(result).toBe('1 день');
    });

    test('check if it not misspells how much days correctly', () => {
      const result = getDayAddition(2);
      expect(result).toBe('2 дня');
    });
    test('check if it not misspells how much days correctly', () => {
      const result = getDayAddition(100);
      expect(result).toBe('100 дней');
    });
  });

  describe('numberWithSpaces', () => {
    test('check if it formats the number correctly', () => {
      const result = numberWithSpaces(10000);
      expect(result).toBe('10 000');
    });
    test('check if it formats the number correctly', () => {
      const result = numberWithSpaces(961000343);
      expect(result).toBe('961 000 343');
    });
    test('check if it returns the same if given non number string', () => {
      const result = numberWithSpaces('album');
      expect(result).toBe('album');
    });
  });

  describe('roundTONearestInteger', () => {
    test('check if it rounds correcly to higher', () => {
      const result = roundTONearestInteger(566.79);
      expect(result).toBe(567);
    });
    test('check if it rounds correcly to lower', () => {
      const result = roundTONearestInteger(566.49);
      expect(result).toBe(566);
    });
  });
});
