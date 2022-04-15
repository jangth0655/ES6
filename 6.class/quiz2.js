class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }

  payload() {
    const payment = this.hoursPerMonth * this.payRate;
    console.log(payment);
    return payment;
  }
}

class FullTime extends Employee {
  static #PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTime.#PAY_RATE);
  }
}

class PartTime extends Employee {
  static #PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTime.#PAY_RATE);
  }
}

const ellie = new FullTime("kim", "engineer", 30);
const bob = new PartTime("bob", "s/w", 30);

ellie.payload();
bob.payload();
