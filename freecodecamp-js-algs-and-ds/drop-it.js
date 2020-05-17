/*
 * Given the array arr, iterate through and remove each element
 * starting from the first element (the 0 index) until the
 * function func returns true when the iterated element is
 * passed through it.
 * */
function dropElements(arr, func) {
  let i = arr.length;
  while(!func(arr[0]) && i > 0) {
    arr = arr.slice(1);
    i--;
  }
  return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
