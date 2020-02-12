// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but
// we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter
// and slowly lowers or increases the properties.

// B) Make Boots wait 20 minutes and call then console.log(boots);

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
  wait(minutes) {
    const timer = setInterval(() => {
      this.tiredness += 10;
      this.hungerLevel += 10;
      this.loneliness += 10;
      this.happiness -= 10;
      this.printer();
      clearInterval(timer);
    }, minutes * 10);
  }
}

// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.

let myCat = new Cat("Boots", "siamese");

myCat.sleep(10);

myCat.eat(200);

myCat.play(30);

myCat.wait(30);

myCat.printer();
