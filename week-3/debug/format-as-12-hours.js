// function formatAs12HourClock(time) {
//   if (Number(time.slice(0, 2)) > 12) {
//     return `${Number(time.slice(0, 2)) - 12}:00 pm`;
//   }
//   return `${time} am`;
// }

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  "current output: %s, target output: %s",
  currentOutput2,
  targetOutput2
);
// formatAs12HourClock currently has a 🐛

// a) Write an assertion to check the return value of formatAs12HourClock when it is called with an input "17:42"
// b) Check the assertion output and explain what the bug is
// c) Now fix the bug and re-run all your assertions
const currentOutput3 = formatAs12HourClock("17:42");
const targetOutput3 = "05:42 pm";
console.assert(
  currentOutput3 === targetOutput2,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);
// Current implementation of function is missing minutes part (:42).
// The condition Number(time.slice(0, 2)) > 12 doesn't account "12:00" or "00:00".
// "12:00" should be "12:00 pm".
// "00:00" should be "12:00 am".

function formatAs12HourClock(time){
  let hour = Number(time.slice(0,2));
  let minute = time.slice(3);
  let dayTime = "AM";
  if(hour >= 12){
    dayTime = "PM";
  }
  if(hour === 0){
    hour = 12;
  }
  else if(hour > 12){
    hour -= 12;
  }
  return `${hour.toString().padStart(2,"0")}:${minute} ${dayTime}`;
}
console.log(formatAs12HourClock("09:12"));
console.log(formatAs12HourClock("12:00"));
console.log(formatAs12HourClock("18:22"));
console.log(formatAs12HourClock("00:00"));
console.log(formatAs12HourClock("20:20"));