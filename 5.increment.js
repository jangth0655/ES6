// Increment & Decrement Operator

let a = 0;
console.log(0);

a = a + 1;
console.log(a);

a++; // a + 1
a--; // a - 1

// 주의
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킨다.
// ++a 값을 먼저 증가하고, 필요한 연산을 함
console.log("-----------------------");
a = 0;
let b = a++; // a의 값을 먼저 할당하고 그 다음에 a의 값을 증가 시킨다.
console.log(b);
console.log(a);
