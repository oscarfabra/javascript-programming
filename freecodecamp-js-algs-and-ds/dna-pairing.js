/*
  The DNA strand is missing the pairing element. This function
  takes each character, gets its pair, and returns the result as
  a 2d array
 */
function pairElement(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let pair = [str[i]];
    switch(str[i]) {
      case 'A': pair.push('T'); break;
      case 'T': pair.push('A'); break;
      case 'C': pair.push('G'); break;
      case 'G': pair.push('C'); break;
    }
    arr.push(pair);
  }
  return arr;
}

console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));