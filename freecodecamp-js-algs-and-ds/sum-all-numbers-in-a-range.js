// Sums all numbers in a range
function sumAll(arr) {
  let lb, ub, sum = 0;
  if (arr[0] <= arr[1]) {
    lb = arr[0]; ub = arr[1];
  } else {
    lb = arr[1]; ub = arr[0];
  }
  for (let i = lb; i <= ub; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([10, 5]));
