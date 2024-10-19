const movieLength = 86400; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const remainingHours = totalHours % 24;

const result = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 1) const movieLength 
// 2) const remainingSeconds 
// 3) const remainingMinutes
// 4) const totalHours
// 5) const remainingHours
// 6) const result

// b) How many function calls are there?
//    console.log(result);

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents
//   The operator % is modulus operator that gives reminder result It divide the movieLength value with 60

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//    const totalMinutes = (movieLength - remainingSeconds) / 60;
//    movieLength - remainingSeconds: Removes the extra seconds that aren't part of a full minute from the total seconds.
//    Converts the remaining time (in seconds) into minutes by dividing the total seconds by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//    I think movieTotalTime is better because this program is about movie time so its better to assign variable name clearly

// f) Think about whether this program will work for all values of movieLength.
//    yes this code is work for all values in second only 24hours formate shows true result

//    Think of what values may cause problems for the code.
//    I enter 86400 value that is not work properly 

//    Decide the result should be for those values, then test it out.
//    the result is 0:0:0 on entering 86400
//    Can you find any values of movieLength which don't give you what you'd expect?
//    yes the value that is greater then or equal to 86400 then code did not work properly 