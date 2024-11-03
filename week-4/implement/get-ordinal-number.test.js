// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
function getOrdinal(number){
    const suffixes = ["th","st","nd","rd"];
    const value = number % 100;
    const sufix = (value > 10 && value <20) ? suffixes[0] : suffixes[Math.min(value%10,3)];
    return value+sufix;
}
console.log(getOrdinal(1));   // "1st"
console.log(getOrdinal(2));   // "2nd"
console.log(getOrdinal(3));   // "3rd"
console.log(getOrdinal(4));   // "4th"
console.log(getOrdinal(11));  // "11th"
console.log(getOrdinal(21));  // "21st"
console.log(getOrdinal(42));  // "42nd"
console.log(getOrdinal(103)); // "103rd"
console.log(getOrdinal(112)); // "112th"