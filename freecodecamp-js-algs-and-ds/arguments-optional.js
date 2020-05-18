/*
 * Sums two arguments together. If only one argument is provided,
 * then return a function that expects one argument and returns
 * the sum.
 * */
function addTogether() {
  let a = arguments[0];
  if(!Number.isInteger(a)){
    return undefined;
  }
  if(arguments.length == 2){
    let b = arguments[1];
    if(!Number.isInteger(b)) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    return function(b) {
      if(!Number.isInteger(b)) {
        return undefined;
      } else {
        return a + b;
      }
    }
  }
}

console.log(addTogether(2,3));
console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));
