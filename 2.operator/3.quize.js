let num = 2;
// num이 숫자가 짝수 ✨, 홀수 👍

console.log("=============if");
if (num % 2 === 0) {
  console.log("✨");
} else {
  console.log("👍");
}

console.log("=============ternary");

num % 2 === 0 ? console.log("✨") : console.log("👍");
