// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수호출은 선언 이전에도 호출이 가능함.

print();

function print() {
  console.log("hello");
}

// 변수와 클래스는 선언만 호이스팅이 가능하고
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러발생
console.log(hi);
let hi = "hi";
