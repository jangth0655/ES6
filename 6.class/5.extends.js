// extends

class Animal {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
}

class Tiger extends Animal {}

const tiger = new Tiger("yellow");
console.log(tiger);
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log("play");
  }
  eat() {
    super.eat();
    console.log("dog eat");
  }
}

const dog = new Dog("black", "ellie");
console.log(dog);
dog.play();
dog.eat();

/* class Dog {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }

  play() {
    console.log("play");
  }
}
 */
