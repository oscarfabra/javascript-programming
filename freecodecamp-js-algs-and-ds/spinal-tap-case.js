/*
  Converts a string to spinal case. Spinal case is 
  all-lowercase-words-joined-by-dashes
*/
function spinalCase(str) {
  let separateStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  let words = separateStr.split(/[\W_]/)
    .join("-")
    .toLowerCase();
  return words;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));