// Object literal { key : value }
// new Object();
// Object.create();
// key : 문자, 숫자, 문자열, 심볼타입
// value : 원시값, 객체(함수)

let apple = {
  name: "apple",
  hello: "👍",
  0: 1,
  ["hello-bye"]: "hell-bye",
};

// 속성, 데이터에 접근하기 위해서
apple.name;
console.log(apple["hello-bye"]);
console.log(apple["hello"]);

// 속성 추가
apple.emoji = "🍎";
console.log(apple);

// 속성 삭제
delete apple.emoji;
console.log(apple);
