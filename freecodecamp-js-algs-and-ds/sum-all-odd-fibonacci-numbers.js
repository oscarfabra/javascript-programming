/*
 * Given a positive integer num, returns the sum of all odd
 * Fibonacci numbers that are less than or equal to num.
 * Pre: num >= 1.
 * */
function sumFibs(num) {
  let arr = [1,1];
  for(let i = 1; arr[i - 1] + arr[i] <= num; i++) {
    arr.push(arr[i - 1] + arr[i]);
  }
  return arr.filter(n => n % 2 == 1).reduce((sum, n) => sum + n);
}

console.log(sumFibs(4));
console.log(sumFibs(75024));
