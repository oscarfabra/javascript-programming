function mutation(arr) {
  let containsAll = true;
  for(let i = 0; i < arr[1].length; i++) {
    let found = false;
    for(let j = 0; j < arr[0].length; j++) {
      if (arr[0][j].toLowerCase() == arr[1][i].toLowerCase()) {
        found = true;
      }
    }
    if(!found) {
      i = arr[1].length;
      containsAll = false;
    }
  }
  return containsAll;
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
