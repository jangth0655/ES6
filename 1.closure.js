const text = "hello";
function func() {
  console.log(text);
}

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner : ${x}`);
  }
  return inner;
}

// const func1 = outer();
// func1();

// 내부 정보를 은닉하고 공개 함수(public, 외부)를 통한 데이터 조작을 위해
// 캡슐화와 정보 은닉
// 클래스 private 필드

function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
