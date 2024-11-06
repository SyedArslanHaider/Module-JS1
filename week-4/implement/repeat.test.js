// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.
function repeat(str,count){
 if(count < 0){
    throw new Error("Count must be a positive integer.");
 }
 if(count === 0){
    return "";
 }
 if(count === 1){
    return str;
 }
 if(count >1){
    return str.repeat(count);
 }
}
describe('repeat', () => {
  test('should throw an error if count is less than 0', () => {
    expect(() => repeat('hello', -1)).toThrow('Count must be a positive integer.');
  });

  test('should return an empty string if count is 0', () => {
    expect(repeat('hy', 0)).toBe('');
  });

  test('should return the string itself if count is 1', () => {
    expect(repeat('arslan', 1)).toBe('arslan');
  });

  test('should return the string repeated count times if count is greater than 1', () => {
    expect(repeat('sergey', 3)).toBe('sergeysergeysergey');
  });
});
//  console.log(repeat("hello", 3));
//  console.log(repeat("world", 1)); 
// try {
//     console.log(repeat("test", 0));   
//     console.log(repeat("error", -2)); 
// } catch (Error) {
//     console.error(Error.message);
// }