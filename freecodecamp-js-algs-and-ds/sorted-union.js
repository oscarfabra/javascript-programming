/*
 * Takes two or more arrays and returns a new array of unique 
 * values in the order of the original provided arrays.
 * */
function uniteUnique(arr) {
  let result = [...arguments[0]];
  for(let i = 1; i < arguments.length; i++) {
    let newArr = arguments[i];
    for(let j = 0; j < newArr.length; j++) {
      if(result.indexOf(newArr[j]) == -1) {
        result.push(newArr[j]);
      }
    }
  }
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
