
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count consecutive occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.
function countChar(str,char){
  let count = 0;
  for(let i=0; i<str.length; i++){
    if(str[i] === char){
        count++;
    }
  }
  return count;
}
describe('countChar',()=>{
  test('should return correct count for a specific character',()=>{
    expect(countChar('aaaaa','a')).toBe(5);
    expect(countChar('banana', 'a')).toBe(3);
    expect(countChar('hello','z')).toBe(0);
    expect(countChar('world','a')).toBe(0);
    expect(countChar(" ","a")).toBe(0);
  })
})
// console.log(countChar("aaaaa","a"));  // Expected output :5
// console.log(countChar("banana", "a")); // Expected output: 3

// Scenario: No Occurrences
// console.log(countChar("hello", "z")); // Expected output: 0
// console.log(countChar("world", "a")); // Expected output: 0

// // Edge cases
// console.log(countChar("", "a"));       // Expected output: 0 (empty string)
// console.log(countChar("a", "a"));      // Expected output: 1 (single character match)
// console.log(countChar("AaAaA", "A")); 

// // assertions
// console.assert(countChar("aaaaa", "a") === 5, "Test 1 Failed: Expected 5 for input ('aaaaa', 'a')");
// console.assert(countChar("banana", "a") === 3, "Test 2 Failed: Expected 3 for input ('banana', 'a')");

// // Scenario: No Occurrences
// console.assert(countChar("hello", "z") === 0, "Test 3 Failed: Expected 0 for input ('hello', 'z')");
// console.assert(countChar("world", "a") === 0, "Test 4 Failed: Expected 0 for input ('world', 'a')");

// // Edge cases
// console.assert(countChar("", "a") === 0, "Test 5 Failed: Expected 0 for empty string input ('', 'a')");
// console.assert(countChar("a", "a") === 1, "Test 6 Failed: Expected 1 for input ('a', 'a')");
// console.assert(countChar("AaAaA", "A") === 3, "Test 7 Failed: Expected 3 for case-sensitive input ('AaAaA', 'A')");

// console.log("All tests passed!");
