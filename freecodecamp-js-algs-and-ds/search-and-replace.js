/*
  Performs a search and replace on the sentence using the arguments
  provided and returns the new sentence, preserving the case of the
  first character in the original word.
 */
function myReplace(str, before, after) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i] == before) {
      if (/[A-Z]/.test(before[0])) {
        let temp = after.split("");        
        temp[0] = temp[0].toUpperCase();
        after = temp.join("");
      }
      words[i] = after;
    }
  }
  return words.join(" ");
}

console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("His name is Tom", "Tom", "john"));