// while(조건){}
//조건 false딜때 까지 코드를 반복 실행

let isActive = true;
let i = 0;

while (isActive && i < 20) {
  i++;
  console.log(i);
  if (i === 10) break;
}
