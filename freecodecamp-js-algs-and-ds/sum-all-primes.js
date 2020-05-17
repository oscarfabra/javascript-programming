/*
 * Returns the sum of all prime numbers that are <= num.
 * Pre: num >= 1
 * */
function sumPrimes(num) {
  let primes = [];
  for(let n = 2; n <= num; n++) {
    let isPrime = true;
    for(let i = 2; i <= n / 2; i++) {
      if(n % i == 0){
        isPrime = false; i = n / 2;
      }
    }
    if(isPrime) {
      primes.push(n);
    }
  }
  return primes.reduce((sum, n) => sum + n);
}

console.log(sumPrimes(977));
