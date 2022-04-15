//1. 문자열의 모든 캐릭터를 한줄에 하나씩 출력
const text = "Hello World!";
const printString = (text) => {
  const splitText = text.split("");
  splitText.forEach((word) => {
    console.log(word);
  });
};
const good = "good";
printString(text);
printString(good);

//2. 사용자들의 id를 잘라내어 각각 id를 배열로 보관
const id = "user1, user2, user3, user4";
const array = [];
id.split(",").map((id) => array.push(id));
console.log(array);

//3. 1초에 한번씩 시계를 출력해보자
setInterval(() => {
  const dateObj = new Date();
  const date = dateObj.getDay();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();
  const currentDate = `${date}일, ${hours}시 : ${minutes}분 : ${seconds}초`;
  console.log(currentDate);
}, 1000);
