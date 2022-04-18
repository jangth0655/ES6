// Spread 연산자, 전개구문
// 모든 Iterable는 Spread될 수 있다.
// func(...iterable), [...iterable], {...iterable}
//EcmaScript 2018

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];

console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}

sum(1, 2, 3, 0, 203, 4);
