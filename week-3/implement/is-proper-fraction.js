// You wil need to implement a function 
// You need to write assertions for your function to check it works in different cases

// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator

// Acceptance criteria:

// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.

// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.

// Zero Denominator check:
// Input: numerator = 3, denominator = 0
// No target output: Error (Denominator cannot be zero)
// Explanation: The function should throw an error when the denominator is zero, as it's not a valid fraction.

// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.

// These acceptance criteria cover a range of scenarios to ensure that the isProperFraction function handles both proper and improper fractions correctly and handles potential errors such as a zero denominator.
function isProperFraction(Numerator,Denominator){
   if(Denominator === 0){
    throw new Error("Denominator can not be zero");
   }
   return Math.abs(Numerator) < Math.abs(Denominator);
  }
  console.assert(isProperFraction(2,3) === true , "Text passed : 2/3 should return true");
  console.assert(isProperFraction(5,3) === false , "Test failed : 5/3 should return false");
  try{
    isProperFraction(3,0);
    console.assert(false , "3/0 should return false")
  }catch(error){
    console.assert(error.message === "Test Failed: Expected error message for zero denominator");
  }
  console.assert(isProperFraction(-4,7) === true , "Test Failed: -4/7 should return true");
  console.assert(isProperFraction(3,3) === false , "Test Failed: 3/3 should return true");
  console.log("All assertions passed if no errors are shown.");