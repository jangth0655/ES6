// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ["banana", "apple", "strawberry", "orange"];

//특정한 오브젝트가 배열인지 아닌지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 수 있다.
console.log(fruits.indexOf("apple"));

// 배열안에 특정한 아이템이 있는지 확인할 수 있다.
console.log(fruits.includes("apple"));

// 추가 - 제일 뒤
fruits.push("peach"); // 배열자체를 업데이트
console.log(fruits.length);
// 추가 - 제일 앞
let addFruit = fruits.unshift("strawberry");
console.log(addFruit);

// 제거 제일 뒤 pop

// 제거 제일 앞 shift

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1);
console.log(deleted);
console.log(fruits);
fruits.splice(1, 0, "banana");
console.log(fruits);
fruits.splice(1, 3);
console.log(fruits);

// 잘라진 새로운 배열을 만듦

const word = ["hello", "hi", "bye", "good"];

let newArr = word.slice(0, 2);
console.log(newArr);

// 순서를 거꾸로
const arr1 = word.reverse();
console.log(arr1);

console.clear();

// 특정한 값으로 배열을 채우기 - 배열 자체를 수정한다.
const arr2 = [1, 2, 3, 4, 5];
arr2.fill(0, 2, 3);
console.log(arr2);

// 배열을 문자열로 합하기
let text = word.join(" ");
console.log(text);
