// creditCard.test.js
const creditCard = require('./credit-card-vslidator');

describe('creditCard function', () => {
  test('should return an error if the card is not 16 digits long', () => {
    expect(creditCard('123456789012345')).toBe('Invalid: Must be 16 digits and all numbers');
    expect(creditCard('123456789012345678')).toBe('Invalid: Must be 16 digits and all numbers');
    expect(creditCard('1234abcd1234abcd')).toBe('Invalid: Must be 16 digits and all numbers');
  });

  test('should return an error if the card has less than two unique digits', () => {
    expect(creditCard('1111111111111111')).toBe('Invalid: Must contain at least two different digits');
    expect(creditCard('2222222222222222')).toBe('Invalid: Must contain at least two different digits');
  });

  test('should return an error if the final digit is not even', () => {
    expect(creditCard('1234567890123457')).toBe('Invalid: Final digit must be even');
    expect(creditCard('9876543210123455')).toBe('Invalid: Final digit must be even');
  });

  test('should return an error if the sum of digits is not greater than 16', () => {
    expect(creditCard('1111111111144444')).toBe('Invalid: Sum of all digits must be greater than 16');
    expect(creditCard('1234567812345678')).toBe('Invalid: Sum of all digits must be greater than 16');
  });

  test('should return "Valid credit card number" for a valid card number', () => {
    expect(creditCard('1234567812345672')).toBe('Valid credit card number');
    expect(creditCard('9876543210123458')).toBe('Valid credit card number');
  });
});
