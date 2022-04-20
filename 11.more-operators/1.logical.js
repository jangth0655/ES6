// 논리연산자 Logical Operator
// && , ||
// short-circuit evaluation

const ob1 = { name: "logical", props: 1 };
const ob2 = { name: "operation" };

let result = ob1 && ob2;
console.log(result);

result = ob1 || ob2;
console.log(result);

console.log("---------------");
// 활용
/**
 * 조건이 truthy && 무언가를 해야할 경우
 * 조건이 false일때 ||  무언가를 해야할 경우
 */

function changeOwner(animal) {
  if (!animal.props) {
    console.log("app is crashed");
  }
  animal.props = "바뀐주인!";
}

function makeNewOwner(animal) {
  if (!animal.props) {
    console.log("app is crashed");
  }
  animal.props = "새로운 주인!";
}

// true라면 실행
ob1.props && changeOwner(ob1);
ob2.props && changeOwner(ob2);

// false라면 실행
ob1.props || changeOwner(ob1);
ob2.props || changeOwner(ob2);

// null 또는 undefined인 경우를 확인 할때
let item; //= { price: 1 };

const price = item && item.price;

console.log(price);

console.log("-----------------||");
// ||은 모든 값이 falshy한 경우 설정(할당) - 0, "", undefined, null
// default parameter는 null과 undefined경우만
function print(text) {
  const message = text || "hello";
  console.log(message);
}

print();
