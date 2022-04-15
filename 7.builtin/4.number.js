const num1 = 123;
const num2 = new Number(123);

console.log(num1, num2);
console.log(Number.isNaN(num2));

const num4 = 1234.12;
console.log(num4.toFixed());

console.log(num4.toPrecision(4)); // 전체 자릿수 표기가 안될때는 지수표기법

// 최소한의 오차 값을 나타내기위해서 = Number.EPSILON

console.log(Number.EPSILON);
