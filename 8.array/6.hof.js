const fruits = ["🍌", "🍓", "🍇", "🍓"];

for (let i = 0; i < fruits.length; i++) {
  //console.log(fruits[i]);
}

// 배열을 빙글빙글 돌면서 원하는것을 할때
fruits.forEach((value) => console.log(value));

// find => 제일 먼저 조건에 맞는 아이템을 찾을 때, 찾은 아이템중 첫 아이템을 반환
// findIndex => 제일 먼저 조건에 맞는 아이템의 인덱스를 반환

const item1 = { name: "milk", price: 1 };
const item2 = { name: "cookie", price: 3 };
const item3 = { name: "pizza", price: 2 };

// 배열의 아이템들이 부분적으로 조건에 맞는지 확인
const products = [item1, item2, item3];
const some = products.some((item) => item.name === "pizza");
// pizza는 배열에 있다.
console.log(some);

// 배열의 아이템들이 모든 조건에 맞는지 확인
const every = products.every((item) => item.name === "pizza");
// pizza는 배열에 있지만, 전부 name === "pizza"는 아니다
console.log(every);

// 조건에 맞는 모든 아이템을 새로운 배열로!
const filter = products.filter((item) => item.name === "pizza");
console.log(filter);
console.clear();
// Map 배열의 아이템들을 다른 아이템으로 맵핑하여 변환하여 새로운 배열 생성
const nums = [1, 2, 3, 4, 5];
const mapFn = nums.map((item) => item * 2);
console.log(mapFn);

// Flatmap : 배열을 풀어준다.

const mapFlat = nums.flatMap((item) => [item * 2]);
console.log(mapFlat);

// sort 배열의 아이템을 정렬
// 기본 => 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열 변경
const texts = ["hi", "abc"];
texts.sort();
console.log(texts);

const number = [1, 2, 3, 4, 5, 0, 1, 10];
number.sort();
console.log(number);
number.sort((a, b) => a - b);
console.log(number);

// reduce => 배열의 요소들을 접어서 접어서 값을 하나로
const reduceNumber = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum = sum + value;
  return sum;
}, 0);

console.log(reduceNumber);
