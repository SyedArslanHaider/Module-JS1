// Predict and explain first...
// write down the error you predict will be raised
// the error that I predict is that there is no function call secondly same name variable str used in 2 times 
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong

function capitalise(str) {
  let strs = `${str[0].toUpperCase()}${str.slice(1)}`;
  return strs;
}
console.log(capitalise("arslan"));