class Counter {
  #value;
  constructor(value) {
    if (value < 0 || isNaN(value)) {
      this.#value = 0;
    } else {
      this.#value = value;
    }
  }

  get value() {
    return this.#value;
  }

  increment() {
    this.#value += 1;
  }
}

const counter = new Counter(0);
counter.increment(); //1
counter.increment(); //2

console.log(counter.value);
