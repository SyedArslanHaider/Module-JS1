function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
//    the index value at start is 0 and string "code your future" = 16 so index value is ++ according to the condition

// b) What is the if statement used to check
//   until str[index] === "u" because U is at position 7 so it returns 7

// c) Why is index++ being used?
//   in each iteration the value of index is inx=creased by one until the condition is true

// d) What is the condition index < str.length used for?
//    str.length means that the it takes string length that is total is 17 in this case 