/*
 * Converts the given number into a roman numeral.
 * */
function convertToRoman(num) {
  let roman = "";
  let thousands = Math.floor(num / 1000) % 10;
  let hundreds = Math.floor(num / 100) % 10;
  let tens = Math.floor(num / 10) % 10;
  let ones = num % 10;
  // Sets the thousands. Assumes thousands < 4
  switch(thousands) {
    case 1: roman += "M"; break;
    case 2: roman += "MM"; break;
    case 3: roman += "MMM"; break;
  }
  // Sets the hundreds
  switch(hundreds) {
    case 1: roman += "C"; break;
    case 2: roman += "CC"; break;
    case 3: roman += "CCC"; break;
    case 4: roman += "CD"; break;
    case 5: roman += "D"; break;
    case 6: roman += "DC"; break;
    case 7: roman += "DCC"; break;
    case 8: roman += "DCCC"; break;
    case 9: roman += "CM"; break;
  }
  // Sets the tens
  switch(tens) {
    case 1: roman += "X"; break;
    case 2: roman += "XX"; break;
    case 3: roman += "XXX"; break;
    case 4: roman += "XL"; break;
    case 5: roman += "L"; break;
    case 6: roman += "LX"; break;
    case 7: roman += "LXX"; break;
    case 8: roman += "LXXX"; break;
    case 9: roman += "XC"; break;
  }
  // Sets the ones
  switch(ones) {
    case 1: roman += "I"; break;
    case 2: roman += "II"; break;
    case 3: roman += "III"; break;
    case 4: roman += "IV"; break;
    case 5: roman += "V"; break;
    case 6: roman += "VI"; break;
    case 7: roman += "VII"; break;
    case 8: roman += "VIII"; break;
    case 9: roman += "IX"; break;
  }
  // Returns the roman numeral
  return roman;
}

console.log(convertToRoman(83));
