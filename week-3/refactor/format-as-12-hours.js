// There is an implementation of format-as-12-hours.js in the debug directory
// Copy that implementation in here, and improve it:
// That implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable

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
