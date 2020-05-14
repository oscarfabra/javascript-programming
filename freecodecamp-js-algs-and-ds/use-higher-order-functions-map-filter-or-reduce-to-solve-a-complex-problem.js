const squareList = (arr) => {
  // Gets the positive integers in the array
  let positiveInt = arr.filter(n => n > 0 && Number.isInteger(n));
  // Gets the square of each positive integer
  let result = positiveInt.map(n => n * n);
  // Returns the result
  return result;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
