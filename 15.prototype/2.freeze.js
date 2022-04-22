// 동결! object.freeze
// 변경 자체가 불가능하다.
// 얕은 상태까지만
const ellie = { name: "ellie" };
const dog = { name: "wow", emoji: "🐶", owner: ellie };

Object.freeze(dog);
dog.name = "mm";
console.log(dog);

ellie.name = "hi ellie";

console.log(dog);

// 밀봉! object.seal
// 값의 수정은 가능하지만, 즉 값만 수정이 가능하다.
// 키에 대한 어떠한 수정은 불가능하다.
const cat = {};
Object.assign(cat, dog); // {...cat}
Object.seal(cat);
console.log(cat);
cat.name = "yaong";
console.log(cat);

// 확장 금지 preventExtension 추가만 안된다.
