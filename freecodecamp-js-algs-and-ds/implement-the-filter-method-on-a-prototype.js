// The global variable
var s = [23, 65, 98, 5];

// Defines myFilter method for Array
Array.prototype.myFilter = function(callback){
  var newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArray.push(this[i]);
    }    
  }
  return newArray;
};

// Sample call to myFilter
var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

console.log(new_s);