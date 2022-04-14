// return을 명시적으로 하지 않으면 자동으로 undefined이 반환된다.
// return을 함수 중간에 하게되면 함수가 종료됨
// return; -> return undefined 즉 함수를 종료하는 역할도 한다.

function add(a, b) {
  //return a + b;
}

const result = add(1, 2);

function print(num) {
  if (num < 0) return;
  console.log(num);
}

const outcome = print(12);
