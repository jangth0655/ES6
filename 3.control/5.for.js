// Loop statement
//for(변수선언문; 조건식; 증감식) { 해당 조건이 맞을때까지 실행 }
// 1. 변수 선언문
// 2. 조건식의 값이 참이면 {} 코드블럭을 수행
// 조건식이 거짓이 뙬때까지 2,3번을 반복

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j += 1) {
    console.log(i, j);
  }
}
console.clear();

// 무한루프
// Continue, break ;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log("i === 10");
    continue;
    break;
  } else {
    console.log(i);
  }
}
