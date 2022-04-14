// Immutability
// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 절대 안된다.
// 상태 변경이 필요한 경우 새로운 상태(오브젝트, 값)을 만들어 반환한다.
// 원시값 - 값 자체가 복사됨
// 객체값 - 참조에 의한 복사(메모리주소)
function display(num) {
  //num = 5; // ❌
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
  //obj.name = "Bob";
  const Bob = { ...obj, name: "bob" };
  console.log(Bob);
}

const ellie = { name: "ellie" };

displayObj(ellie);
console.log(ellie);
