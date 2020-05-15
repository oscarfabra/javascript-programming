/*
  Removes all elements from the initial array that are of the same
  value as the other arguments
*/
function destroyer(arr) {
  // Gets the values to seek and destroy
  var values = Array.prototype.slice.call(arguments, 1);
  // Returns the items in arguments[0] that are not in values
  return arguments[0].filter(item => !values.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
