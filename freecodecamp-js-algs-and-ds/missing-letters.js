/*
  Finds the missing letter in the passed letter range and
  returns it.
 */
function fearNotLetter(str) {
  let missing = undefined;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let start = alphabet.indexOf(str[0]);
  let fullStr = alphabet.slice(start, start + str.length + 1);
  for(let i = 0; i < fullStr.length; i++) {
    if(fullStr[i] != str[i]) {
      missing = fullStr[i];
      i = fullStr.length;
    }
  }
  return missing;
}

console.log(fearNotLetter("abcdefghjklmno"));
