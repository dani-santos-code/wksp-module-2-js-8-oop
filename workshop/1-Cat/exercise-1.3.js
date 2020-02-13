// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a boots object.
// Rewrite that Cat class, but let's also add some functions that will modify the various porperties of a cat.
// Write methods that will update tiredness, hunger, loneliness, and happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times that number.
// - Write an eat method that accept grams of food and reduces hunger by 1/5 that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times that number.
// - the happiness property should be modified all of the above methods as well.
// You decide how much sleep, eat, and play affects your cat's happiness.

class Cat {
  constructor(name, breed) {
    this.name = name || "Kitty";
    this.breed = breed || "mixed";
    this.tiredness = 100;
    this.hungerLevel = 100;
    this.loneliness = 100;
    this.happiness = 0;
    this.species = "feline";
  }
  sleep(hours) {
    this.tiredness -= hours * 5;
    this.happiness += 40;
  }
  eat(gramsOfFood) {
    this.hungerLevel -= gramsOfFood / 5;
    this.happiness += 50;
  }
  play(minutes) {
    this.loneliness -= minutes * 3;
    this.happiness += 10;
  }
  printer() {
    console.log(
      `${this.name} who's a ${this.breed} is ${this.tiredness}% tired, ${this.hungerLevel}% hungry, ${this.loneliness}% lonely and ${this.happiness}% happy`
    );
  }
}
// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.

let myCat = new Cat("Boots", "siamese");

myCat.sleep(10);

myCat.eat(200);

myCat.play(30);

myCat.printer();
