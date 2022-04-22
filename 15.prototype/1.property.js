const dog = { name: "dog", emoji: "🐶" };
console.log(Object.keys(dog));
console.log(Object.values(dog));

console.log("name" in dog); // boolean

//  오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);

const desc = Object.getOwnPropertyDescriptor(dog, "name");
console.log(desc);
