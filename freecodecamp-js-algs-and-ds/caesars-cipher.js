/**
 * Takes a ROT13 encoded string as input and returns a decoded
 * string.
 */
function rot13(str) {
  let decodedArr = str.split("").map(function(char) {
    if(/[A-Z]/.test(char)){
      let charCode = 0;
      if(char.charCodeAt(0) - 13 < 65){
        charCode = 91 - (65 - (char.charCodeAt(0) - 13));
      } else {
        charCode = char.charCodeAt(0) - 13;
      }
      return String.fromCharCode(charCode);
    } else {
      return char;
    }
  });
  return decodedArr.join("");
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
