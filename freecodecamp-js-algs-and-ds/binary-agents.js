/* Returns an English translated sentence of the passed binary 
 * string.
 * */
function binaryAgent(str) {
  let binary = str.split(" ");
  // Turns binary into decimal numbers
  let decimal = binary.map(bin => parseInt(bin, 2));
  // Turns decimals into letters
  let letters = decimal.map(dec => String.fromCharCode(dec));
  // Returns the string of letters
  return letters.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
