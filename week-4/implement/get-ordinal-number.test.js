// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
function getOrdinal(number) {
  if (typeof number !== 'number' || isNaN(number)) return null;

  const suffixes = ['th', 'st', 'nd', 'rd'];
  const value = number % 100;

  return number + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
}
describe('getOrdinal', () => {
  test('returns "1st" for 1', () => {
    expect(getOrdinal(1)).toBe('1st');
  });
    test('returns "2nd" for 2', () => {
    expect(getOrdinal(2)).toBe('2nd');
  });
    test('return "5th" for 5',()=>{
     expect(getOrdinal(5)).toBe('5th');
  })
        test('return "5th" for 5',()=>{
     expect(getOrdinal(5)).toBe('5th');
  })
      test('return "11th" for 11',()=>{
     expect(getOrdinal(11)).toBe('11th');
  })
      test('return "21st" for 21',()=>{
     expect(getOrdinal(21)).toBe('21st');
  })
      test('return "42th" for 42',()=>{
     expect(getOrdinal(42)).toBe('42nd');
  })
});
// console.log(getOrdinal(1));   // "1st"
// console.log(getOrdinal(2));   // "2nd"
// console.log(getOrdinal(5));   // "3rd"
// console.log(getOrdinal(4));   // "4th"
// console.log(getOrdinal(11));  // "11th"
// console.log(getOrdinal(21));  // "21st"
// console.log(getOrdinal(42));  // "42nd"
// console.log(getOrdinal(103)); // "103rd"
// console.log(getOrdinal(112)); // "112th"