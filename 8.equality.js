// Equality operator

// = 할당 == 같음 != 값이 다름 === 값과 타입이 둘다 같아야한다. !== 값과 타입이 다름

console.log(2 == "2");
console.log(2 === "2"); // ✨
console.log(true == 1);
console.log(true === 1);
console.clear;
console.log("---------obj------------");

const obj1 = {
  name: "js",
};

// 새로운 오브젝트를 만들었기 때문에 메모리공간에 서로다른 개별적인 공간을 차지한다.
const obj2 = {
  name: "js",
};

let obj3 = obj2;

console.log(obj1 == obj2);
console.log(obj1.name === obj2.name);
console.log(obj3 == obj2);
