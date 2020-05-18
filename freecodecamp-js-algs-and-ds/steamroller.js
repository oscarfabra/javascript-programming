// Flattens a nested array
function steamrollArray(arr) {
  let newArr = [];
  // Defines the flatten function
  var flatten = function(arr) {
    if(!Array.isArray(arr)) {
      newArr.push(arr);
    } else {
      for(let i = 0; i < arr.length; i++) {
        flatten(arr[i]);
      }
    }
  };
  // Calls the flatten function for each element in the array
  for(let i = 0; i < arr.length; i++) {
    flatten(arr[i]);
  }
  return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
