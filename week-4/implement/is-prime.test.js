// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime
function isPrime(num){
    if(num <=1){
        return false;
    }
    if(num === 2){
        return true;
    }
    if(num % 2 === 0){
        return false;
    }
    for(let i=3; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
describe('isPrime',()=>{
    test('should return false for numbers less than or equal to 1',()=>{
      expect(isPrime(0)).toBe(false);
      expect(isPrime(1)).toBe(false)
    })
    test('should return true for 2',()=>{
        expect(isPrime(2)).toBe(true);
    })
    test('should return true for 11',()=>{
        expect(isPrime(11)).toBe(true);
    })
    test('should return false for 25',()=>{
        expect(isPrime(25)).toBe(false);
    })
})
// console.log(isPrime(2));   // true
// console.log(isPrime(11));  // true
// console.log(isPrime(15));  // false
// console.log(isPrime(1));   // false
// console.log(isPrime(17));  // true
// console.log(isPrime(25));  // false