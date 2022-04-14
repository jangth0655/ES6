const obj = {
  name: "ellie",
  age: 20,
};

// 코딩하는 시점에 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때
function getValue(obj, key) {
  return obj[key];
}

function addKey(obj, key, value) {
  obj[key] = value;
}

function deleteKey(obj, key) {
  return delete obj[key];
}

console.log(getValue(obj, "age"));
addKey(obj, "job", "engineer");
console.log(obj);

deleteKey(obj, "job");
console.log(obj);
