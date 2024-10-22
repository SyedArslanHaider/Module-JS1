function pad(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
}
function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  console.log(remainingSeconds);
  const totalMinutes = (seconds - remainingSeconds) / 60;
  console.log(totalMinutes);
  const remainingMinutes = totalMinutes % 60;
  console.log(remainingMinutes);
  const totalHours = (totalMinutes - remainingMinutes) / 60;
  console.log(totalHours);
  const remainingHours = totalHours % 24;
  console.log(remainingHours);

  return `${pad(remainingHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(143));

// You can play computer with this example
// Use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions
//  
// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
//    pad is called three times on function call once for Minute and second and hour
// Call formatTimeDisplay with an input of 143, now answer the following:
//    00:02:23
// b) What value is assigned to the parameter num when pad is called for the first time?
//    first time when call the value is 0 
// c) What is the return value of pad when it is called for the first time?
//    return 0 
// d) What is the value assigned to the parameter num when pad
//    remainingSeconds = 143 % 60 results in 23.
// is called for the last time in this program?  Explain your answer
//    when call the last time value is 23
// e) What is the return value when pad is called
//    00:02:23
// for the last time in this program?  Explain your answer
// f) Research an alternative way of padding the numbers in this code.
// Look up the string functions on mdn
