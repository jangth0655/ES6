// 생성자 함수

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  //this.printName = () => console.log(this.emoji, this.name);
}

// prototype level function
// 동일한 프로토타입을 가지고 있기 때문에 가능하다.
Dog.prototype.printName = function () {
  console.log(this.emoji, this.name);
};

const dog1 = new Dog("walwal", "dog");
console.log(dog1);

dog1.printName();

// 인스턴스레벨에서 오버라이딩 가능하다
// 동일한 이름으로 함수를 재정의 하면
// 부모 함수의 프로퍼터티는 가려진다 (섀도잉 됨)

// object.create(parent.prototype) 상속 가능
// 인스턴스 확인 instanceof // boolean
