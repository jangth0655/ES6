// Math
// static propeties, method

console.log(Math.E); // 오일러의 상수, 자연로그의 밑

console.log(Math.PI); // 원주율 파이값

// static method
console.log(Math.abs(-10));
// 소수점 이하를 올림,내림
console.log(Math.ceil(1.4));
console.log(Math.floor(1.4));

// 반올림
console.log(Math.round(1.5));
//정수만 반환
console.log(Math.trunc(1.5123123));

// 최대값 최소값
console.log(Math.max(1, 23, 4));
console.log(Math.min(1, 23, 4));

//✨랜덤값 기본적으로 0~1 사이의 값을 랜덤으로 나타낸다.
console.log(Math.floor(Math.random() * 100000 + 9000));

// 거듭제곱
console.log(3 ** 2);
console.log(Math.pow(3, 2));
