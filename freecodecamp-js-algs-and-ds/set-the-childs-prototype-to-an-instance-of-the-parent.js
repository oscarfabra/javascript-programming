function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Sets the prototype of Dog to be an instance of Animal
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();