const fruits = ["banana", "apple", "strawberry", "orange"];

console.log(fruits[0]);

console.log(fruits.length);

// 추가, 삭제 - 좋지 않은 방식 ❌
fruits[4] = "hello";
console.log(fruits);
delete fruits[fruits.length - 1]; // 자리에 텅텅 비어있음
