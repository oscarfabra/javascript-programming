/*
  Compares two arrays and returns a new array with any items only
  found in one of the two given arrays, but not both.
*/
function diffArray(arr1, arr2) {
  // Gets items that are in both arrays
  var bothArr = arr1.filter(item => arr2.includes(item));
  // Gets items that are only in arr1
  var onlyArr1 = arr1.filter(item => !bothArr.includes(item));
  // Gets items that are only in arr2
  var onlyArr2 = arr2.filter(item => !bothArr.includes(item));
  // Returns items that are only in arr1 or in arr2 but not both
  return onlyArr1.concat(onlyArr2);
}

// Test calls
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));