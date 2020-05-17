/*
 * Finds the smallest common multiple of the provided parameters
 * that can be evenly divided by both, as well as by all
 * sequential numbers in the range between these parameters.
 * */
function smallestCommons(arr) {
  let lb, ub;
  if(arr[0] <= arr[1]) {
    lb = arr[0]; ub = arr[1];
  } else {
    lb = arr[1]; ub = arr[0];
  }
  if(lb <= ub && lb == 1){
    lb = 2;
  }
  let found = false;
  let n = lb * ub;
  for(; !found; n += lb * ub) {
    let i = lb;
    let multiple = true;
    for(; i <= ub; i++) {
      if(n % i != 0) {
        multiple = false; i = ub;
      }
    }
    if(multiple) {
      found = true;
    }
  }
  return n - lb * ub;
}

console.log(smallestCommons([1,13]));
