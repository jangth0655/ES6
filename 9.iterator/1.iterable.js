// Iterable 하다는건! 순회가 가능하다
// [Symbol.iterator](): IterableIterator<T>
// 순획 가능한 개게다
// 순회가 가능하다는 것은 반복문, 연사자들을 사용할 수 있다.
// 순회가 가능하면 무엇을 할 수 있는지
// 빙글 빙글 도는 반복문, 연산자들을 사용할 수 있다.

const array = [1, 2, 3];
console.log(array.values());
console.log(array.entries());
console.log(array.keys());
console.log("-----------------");

// iterable 사용해보기
for (let item of array) {
  console.log(item);
}

console.log("-----------------");
const iterator = array.values();
while (true) {
  const item = iterator.next();
  console.log(item.done, item.value);
  if (item.done) break;
}

const obj = { id: 123, name: `ellie` };

// 일반 객체는 iterable 하지 않다.
for (let key in obj) {
  console.log(key);
}
