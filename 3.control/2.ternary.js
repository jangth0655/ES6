// Ternary
// 조건식 ? 참 : 거짓
let fruit = "orange";
console.log("if-----------------");
if (fruit === "apple") {
  console.log("🍎");
} else if (fruit === "orange") {
  console.log("orange");
} else {
  console.log("!!");
}

console.log("ternary-----------------");
// 복잡한 삼항연산자
fruit === "apple"
  ? console.log("🍎")
  : console.log("orange")
  ? console.log("!!")
  : "";

console.log("function-----------------");
// 조건이 두개 이상일 경우 함수로 나타내는게 좋다.
const fruitFun = (fruit) => {
  if (fruit === "apple") {
    console.log("🍎");
  } else if (fruit === "orange") {
    console.log("orange");
  } else {
    console.log("!!");
  }
};

fruitFun("orange");
