/*
 * Convert the characters &, <, >, " (double quote), 
 * and ' (apostrophe), in a string to their corresponding 
 * HTML entities.
 * */
function convertHTML(str) {
  let strArr = str.split("");
  for(let i = 0; i < strArr.length; i++) {
    switch(strArr[i]) {
      case '&': strArr[i] = '&amp;'; break;
      case '<': strArr[i] = '&lt;'; break;
      case '>': strArr[i] = '&gt;'; break;
      case '"': strArr[i] = '&quot;'; break;
      case "'": strArr[i] = '&apos;'; break;
    }
  }
  return strArr.join("");
}

console.log(convertHTML("<>"));
console.log(convertHTML("abc"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
