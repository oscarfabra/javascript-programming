/**
 * Returns true if the passed string looks like a valid US
 * phone number.
 */
function telephoneCheck(str) {
  // Set up Booleans
  let hasTenDigits = false;
  let hasElevenDigits = false;
  let startsWithOne = false;
  let hasPermittedCharsOnly = false;
  let hasCorrectParentheses = true;

  // Regex expressions
  let strippedStr = str.replace(/[\D]/g, '');
  console.log(strippedStr);
  
  // Check if number has ten digits
  hasTenDigits = /^\d{10}$/.test(strippedStr);
  console.log("hasTenDigits", hasTenDigits);
  
  // Check if number has eleven digits
  hasElevenDigits = /^\d{11}$/.test(strippedStr);
  console.log("hasElevenDigits", hasElevenDigits);

  // Check if number starts with one
  startsWithOne = /^1/.test(str);
  console.log("startsWithOne", startsWithOne);

  // Check if number has permitted chars only
  hasPermittedCharsOnly = /^[\d -\\(\\)]+$/.test(str);
  console.log("hasPermittedCharsOnly", hasPermittedCharsOnly);

  // Check if number has correct parentheses
  if(str.includes("(") && !str.includes(")")) {
    hasCorrectParentheses = false;
  } else if(!str.includes("(") && str.includes(")")){
    hasCorrectParentheses = false;
  } else if(str.includes("(") && str.includes(")")){
    if(str.split("(").length > 2 || str.split(")").length > 2) {
      hasCorrectParentheses = false;
    } else if(str.indexOf(")") - str.indexOf("(") != 4){
      hasCorrectParentheses = false;
    }
  }
  console.log("hasCorrectParentheses", hasCorrectParentheses);

  // Decides if phone number is valid or not
  if (!hasTenDigits && !hasElevenDigits) {
    return false;
  } else if (!hasPermittedCharsOnly || !hasCorrectParentheses) {
    return false;
  } else if (hasElevenDigits && !startsWithOne) {
    return false;
  } else {
    return true;
  }
}

console.log(telephoneCheck("-1 (757) 622-7382"));
