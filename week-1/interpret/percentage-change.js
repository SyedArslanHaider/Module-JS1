let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are three function calls 
// 1) carPrice.replaceAll();
// 2) priceAfterOneYear.replaceAll()
// 3) console.log()

// b) Identify all the lines that are variable reassignment statements
// There are two lines of Variable reassignment
// 1) carPrice = Number(carPrice.replaceAll(",", "")); After removing commas
// 2) priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); After removing commas

// c) Identify all the lines that are variable declarations
// There are four lines of variable declaration
// 1) let carPrice
// 2) let priceAfterOneYear
// 3) const priceDifference
// 4) const percentageChange

// d) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// It removes commas to the price and also convert the string into Numbers 