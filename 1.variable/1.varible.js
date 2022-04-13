// let은 재할당이 가능하다.
let a = 0;
console.log(a);

a = 1;

console.log(a);

let b; // undefine 아무것도 정해지지 않은 상태
console.log(b);

b = 2;
console.log(b);

// const는 재할당이 불가능 하다.
// 1. 상수
// 2. 상수변수

const text = "hello";
text = "hi"; // 불가능
