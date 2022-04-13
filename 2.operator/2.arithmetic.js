// 산술연산자 (Arithmetic)
// + - * / % **(지수===거듭제곱)

console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2); // es7
console.log(Math.pow(5, 2)); // 거듭제곱

// + 연산자 주의점 !

let text = "Hello" + "Hi";
console.log(text);
text = "123" + 1; // 숫자 + 문자열 === 문자열
console.log(text);
