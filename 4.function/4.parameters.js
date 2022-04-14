// 매개변수의 기본값은 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장된다.
// 외부에서 값을 전달 하지않은 경우 즉 undefined인경우 Default값을 설정할 수 있다.
function add(a = 1, b = 2) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log("arguments", arguments[1]);
}

add(1, 2, 3);

console.log("----------------Rest");
// Rest Parameters
//
function sum(...num) {
  console.log(num);
}

sum(1, 2, 3, 4, 5, 6, 7);
