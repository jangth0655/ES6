// 접근자 프로퍼티(Accessor Property)

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // 함수지만 속성에 접근하는 것으로 만들어 준다.(함수와 같이 여러 동작,제어 후 속성으로 접근 가능)
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log(value);
  }
}

const student = new Student("suji", "kim");
console.log(student.fullName);
student.fullName = "Hello";
