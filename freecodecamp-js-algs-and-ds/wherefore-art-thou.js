/*
  Looks through an array of objects (first argument) and returns an array of
  all objects that have matching name and value pairs (second argument)
*/
function whatIsInAName(collection, source) {
  let arr = [];
  let sourceKeys = Object.keys(source);
  for(let i = 0; i < collection.length; i++){
    let obj = collection[i];
    let objMatches = true;
    for(let j = 0; j < sourceKeys.length; j++) {
      let sKey = sourceKeys[j];
      if(!Object.keys(obj).includes(sKey) || source[sKey] !== obj[sKey]) {
          objMatches = false; j = sourceKeys.length;
      }
    }
    if(objMatches) {
      arr.push(obj);
    }
  }
  return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));