function creditCard(value){
    const cardPattern = /^\d{16}$/.test(value);
    if(!cardPattern){
      return "Invalid: Must be 16 digits and all numbers";
    }
     const uniqueDigits = new Set(value.split('')).size;
    if (uniqueDigits < 2) {
        return "Invalid: Must contain at least two different digits";
    }
    if(parseInt(value.slice(-1)) % 2 !== 0){
        return "Invalid: Final digit must be even";
    }
    const sum = Array.from(value).reduce((a,b) => a+parseInt(b),0);
    if(sum <=16){
      return "Invalid: Sum of all digits must be greater than 16";
    }
      return "Valid credit card number";
}
module.exports = creditCard
// Example tests
// console.log(creditCard("9999777788880000")); // "Valid credit card number"
// console.log(creditCard("6666666666661666")); // "Valid credit card number"
// console.log(creditCard("a92332119c011112")); // "Invalid: Must be 16 digits and all numbers"
// console.log(creditCard("4444444444444444")); // "Invalid: Must contain at least two different digits"
// console.log(creditCard("1111111111111110")); // "Invalid: Sum of all digits must be greater than 16"
// console.log(creditCard("6666666666666661")); //  "Invalid: Final digit must be even"