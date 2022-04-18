// 얕은 복사 (Shallow Copy)
// 객체는 메모리 주소가 전달되기 떄문에
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어진다.
// 즉 새로운 오브젝트가 만들어지는 것이 아니라 얕은 복사가 이루어 진다.

const pizza = { name: "pizza", price: 2 };
const ramen = { name: "ramen", price: 3 };
const sushi = { name: "sushi", price: 1 };

const store1 = [pizza, ramen]; // 새롭게 만들어진 배열을 갖는다
const store2 = Array.from(store1); // 새롭게 만들어진 배열을 갖는다
const store3 = [{ pizza: "pizza", price: 4 }, { ...ramen }];

console.log("store3", store3);
console.log("store1", store1);
console.log("store2", store2);
