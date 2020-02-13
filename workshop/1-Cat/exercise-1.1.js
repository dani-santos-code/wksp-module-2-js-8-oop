// Exercise 1.1
// ------------
// Creating a Cat class.

// A) Create an object that represents a cat.
// It should have properties for tiredness, hunger, loneliness and happiness.
// You can set all of these properties to 0 by default.

class Cat {
  constructor(name, tiredness, hunger, loneliness, happiness) {
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.loneliness = loneliness;
    this.happiness = happiness;
    this.species = "feline";
  }
}

// B) Instantiate a cat called 'boots' with the Cat class.

let boots = new Cat();

// C) What do you see when you console.log(boots)?
console.log(boots);
/* all properties are to undefined */

// D) What if I want to output just boots' species?

console.log(boots.species);

// E) Boots' name is not part of its object.
//    Update the class above to accept have a name parameter
//    and pass Boots' name as an argument.
