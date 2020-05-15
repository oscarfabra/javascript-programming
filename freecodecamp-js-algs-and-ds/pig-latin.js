/*
  Translates the provided string to Pig Latin
*/
function translatePigLatin(str) {
  let pigLatin = "";
  if (/[aeiouAEIOU]/.test(str[0])) {
    pigLatin += str + "way";
  } else {
    let consonants = [], i;
    let letters = str.split("");
    for (i = 0; !/[aeiouAEIOU]/.test(letters[i]); i++) {
      consonants.push(str[i]);
    }
    pigLatin += letters.slice(i).concat(consonants).join("") + "ay";
  }
  return pigLatin;
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));
