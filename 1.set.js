// Set (순서가 중요하지 않다.)
const set = new Set([1, 2, 3]);
console.log(set);
console.log(set.size);
console.log(set.has(2));
// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// add
set.add(6);
console.log(set);
// 중복이 불가
set.add(6);
console.log(set);

// 삭제
set.delete(6);
console.log(set);

const obj1 = { name: "apple", price: 8 };
const obj4 = obj1;
const obj2 = { name: "banana", price: 5 };

const objs = new Set([obj1, obj2]);
console.log(objs);

obj1.price = 10;
objs.add(obj1);
console.log(objs);
// quiz
const obj3 = { name: "banana", price: 5 }; // new obj
objs.add(obj3);
objs.add(obj4); // 중복 똑같은 주소를 참조한다.
console.log(objs);
