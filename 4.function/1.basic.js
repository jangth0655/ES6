// 함수 정의
function add(a, b) {
  const result = a + b;
  return result;
}

//함수 호출 fucName()
console.log(add(1, 2));

function fullName(first, last) {
  const name = `${first} ${last}`;
  return name;
}

const myName = fullName("tae", "hee");
console.log(myName);
