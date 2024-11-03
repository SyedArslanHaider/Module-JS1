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
console.log(isPrime(2));   // true
console.log(isPrime(11));  // true
console.log(isPrime(15));  // false
console.log(isPrime(1));   // false
console.log(isPrime(17));  // true
console.log(isPrime(25));  // false