// 함수 표현식 -- 값으로 표현될 수 있는 문을 표현식
// const name = function(){}

let add = function (a, b) {
  return a + b;
};

console.log(add(1, 2));

add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

// 생성자 함수 const object = new Function();

//IIFE(Immediately-Invoked Function Expressions)
(function run() {
  console.log("good");
})();
