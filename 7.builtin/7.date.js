// 현재 시간 출력
// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date("Jun 5, 2022"));
console.log(Date.now());

console.log(Date.parse("Jun 5, 2022")); //밀리초단위로 파싱해줌

const now = new Date();
now.setFullYear(2023);
now.setMonth(3);
console.log(now.getFullYear(), now.getMonth(), now.getDate());
console.log(now);

console.log(now.toLocaleString("ko-KR"));
