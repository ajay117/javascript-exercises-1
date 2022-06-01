//Write two temperatures conversions
//After conversion the output should be rounded
//one decimal place
 //Fahrenheit to Celcius ftoC(32) == 0
//  [°C] = ([°F] − 32) × 5⁄9
 //Celcius to Fahrenheit CtoF(0) == 32
//  [°F] = [°C] × 9⁄5 + 32

//Roundin number to one decimal place code, thanks to Billy Moon on stack overflow
// https://stackoverflow.com/questions/7342957/how-do-you-round-to-1-decimal-place-in-javascript

const ftoc = function(temp) {
  const celciusTemp = (temp -32) * 5 / 9;
  return Math.round(celciusTemp * 10) / 10;
};

const ctof = function(temp) {
  const fahrenheitTemp = (temp * 9 / 5) + 32;
  return Math.round(fahrenheitTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
