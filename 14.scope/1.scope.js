// code block : {} , if(){}, for(){}

// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없다.
{
  const a = "a";
}
console.log(a);
const b = "b";

// 함수 외부에서는 함수 내부의 변수를 참조할 수 없다.
function print() {
  const message = "Hello World";
  console.log(message);
}
console.log(message);

{
  const x = 1;
  {
    const y = 2;
    console.log(x);
  }
  console.log(x);
  //console.log(y); 불가능
}

const text = "global"; // 전역 스코프 (global scope)
{
  const text = "inside block1"; // 지역 변수(로컬변수), 로컬 스코프
  {
    console.log(text); // 가장 근접한 'inside block1' 출력
  }
}
