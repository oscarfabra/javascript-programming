// The global variable
var s = [23, 65, 98, 5];

// Defines myMap function
Array.prototype.myMap = function(callback){
  var newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
};

// A test call on the s array
var new_s = s.myMap(function(item){
  return item * 2;
});

console.log(new_s);