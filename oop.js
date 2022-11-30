console.log("\n - - - JavaScript Object Oriented Programming (OOP) - - -")

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has "+ this.numLegs+" legs.";}
};
// Only change code below this line

// Access properties with Dot Notation
console.log(dog.name);
console.log(dog.numLegs);
// Use the method created on the dog object
console.log(dog.sayLegs());
console.log(dog);

// Create a constructor
// const Dog = () => {
//   this.name = "Snoopy",
//   this.color = "Burle",
//   this.numLegs = 666
// } 
// console.log(Dog.toString());

// // Create an object using constructor
// let hound = new Dog();
// console.log(hound);

// Extend Constructor to Take Arguments
function Dog(name, color){
  Dog.prototype.numLegs = 4;
  this.name = name,
  this.color = color,
  this.numLegs = 4
}
let terrier = new Dog("Fido", "Hot Pink");
console.log(terrier);

// Determin Type of an Object using instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(666);
console.log(myHouse);
console.log("myHouse instanceof House: "+ (myHouse instanceof House));

// Own Properties add Own Properties of an object instance to an array
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
  if(canary.hasOwnProperty(property))
    ownProps.push(property);
}
console.log(ownProps);

// Prototype properties are values shared across all instances of
// an object. Equivalent to static in Java
// function Dog(name) {
//   this.name = name;
//   Dog.prototype.numLegs = 4;
// }
let beagle = new Dog("Snoopy");
console.log(beagle);

// iterate over properties and differentiate ownProperties vs prototype
// function Dog(name) {
//   this.name = name;
// }

Dog.prototype.numLegs = 4;

let snowfreckle = new Dog("Snoopy");

let ownsProps = [];
let prototypeProps = [];

// Add all of the own properties of beagle to the array ownProps. 
// Add all of the prototype properties of Dog to the array prototypeProps.

for (let property in beagle) {
  if(snowfreckle.hasOwnProperty(property))
    ownsProps.push(property);
  else
    prototypeProps.push(property);
}
console.log("ownsProps:\t"+ ownsProps + "\nprototypeProps:\t"+ prototypeProps);

// Use constructor property of an object to determine the 
// constructor that created the instance of the object.

// Only change code below this line
const joinDogFraternity = (candidate) => candidate.constructor === Dog;

const smellyDog = new Dog("Fido", "Blue");
console.log("was smellyDog object created by the Dog constructor? \t"
  + joinDogFraternity(smellyDog) );
  
// Prototype on Object instead of Properties
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {console.log("The dog is eating.")},
  describe: function() {console.log("The dog's name is " + this.name)}
};

const funkyDog = new Dog("Wilbur");
console.log(funkyDog);
console.log(funkyDog.constructor);
funkyDog.eat();
funkyDog.describe();

// Check Prototype of Object
let sharkDog = new Dog("SharkDog");
console.log("Dog.prototype.isPrototypeOf(sharkDog);\t"
  +Dog.prototype.isPrototypeOf(sharkDog));

//Prototype Chain
console.log("Object.prototype.isPrototypeOf(Dog.prototype):\t" + Object.prototype.isPrototypeOf(Dog.prototype));

// Inherit Behavior from a Supertype
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom")},
  describe: function() {
    console.log("The dog's name is " + this.name)}
};
Dog.prototype = Object.create(Animal.prototype);

let corgi = new Dog("Merle", "Blue");
console.log(corgi);
console.log("corgi.constructor: \t"+corgi.constructor);
corgi.describe();
corgi.eat();

// Reset Inherited Constructor Property
function Bird() { } ;

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

let protoDog = new Dog("Test constructor reset", "Yellow");
console.log("\nprotoDog before reset of constructor: \t" + protoDog);
console.log("\tprotoDog.constructor: \t"+protoDog.constructor);

Dog.prototype.constructor = Dog;
Bird.prototype.constructor = Bird;
console.log("\nprotoDog AFTER reset of constructor:\n\t'Dog.prototype.constructor = Dog;\n\t'" + protoDog);
console.log("\tprotoDog.constructor: \t"+protoDog.constructor);

let duck = new Bird();
let lab = new Dog();

// Add Methods After Inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {console.log("Woof!");};

let barkingDog = new Dog("Felix", "FDE");
console.log(barkingDog);
barkingDog.bark();

// Override Inherited Methods
Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {return 'Alas, this is a flightless bird.';};

let kowalski = new Penguin();
console.log(kowalski.fly());

// Mixin used to Add Common Behavior Between Unrelated Objects
/* Create a mixin named glideMixin 
 * that defines a method named glide. 
 * Then use the glideMixin to give both 
 * bird and boat the ability to glide.*/
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
const glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Dude, you can glide!\n\tBirds glide, but do boats glide? :shrug");
  };
};
glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();

// Use Closure to Protect Properties Within an Object from Being Modified Externally
function PublicBird() {
  this.weight = 15
}
function Cow(){
  Dog.prototype.numLegs = 4,
  this.name = "name",
  this.color = "color",
  this.numLegs = 4
}
let aCow = new Cow();
console.log(aCow);

function PrivateBird() {
  let weight = 15;
  this.getWeight = function () {
    return weight;
  }
}
let aPublicBird = new PublicBird();
let aPrivateBird = new PrivateBird();
console.log(aPublicBird);
console.log("aPublicBird.weight:\t"+aPublicBird.weight);
console.log("console.log(aPrivateBird):\t"+aPrivateBird.weight);
console.log("aPrivateBird.getWeight():\t"+ aPrivateBird.getWeight());
// Immediately Invoked Function Expression (IIFE)
const makeNest = () => {
  console.log("A cozy nest is ready");
}
makeNest();
// IIFE equivalent
(()=> {
  console.log("A cozy nest is ready");
})();

// Use IIFE to Group Multiple Mixin functions into a single object.
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
// use IIFE to Group the two mixins above into the funModule object
let funModule = ( () => {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();
funModule.isCuteMixin(bird);
funModule.singMixin(bird);
funModule.isCuteMixin(boat);
console.log("bird.isCute():\t"+bird.isCute());
console.log("bird.sing();");
bird.sing();
console.log("boat.isCute():\t"+boat.isCute());