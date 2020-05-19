var Person = function(firstAndLast) {
  this.getFirstName = function() {
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = function() {
    return firstAndLast.split(" ")[1];
  };
  this.getFullName = function() {
    return firstAndLast;
  };
  this.setFirstName = function(first) {
    firstAndLast = first + " " + firstAndLast.split(" ")[1];
  };
  this.setLastName = function(last) {
    firstAndLast = firstAndLast.split(" ")[0] + " " + last;
  };
  this.setFullName = function(fullName) {
    firstAndLast = fullName.slice(0);
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
// console.log(Object.keys(bob).length);
// console.log(bob instanceof Person);
// console.log(bob.getFullName());

// bob.setFirstName("Haskell");
// console.log(bob.getFullName());

// bob.setLastName("Curry");
// console.log(bob.getFullName());

// bob.setFullName("Haskell Curry");
// console.log(bob.getFullName());