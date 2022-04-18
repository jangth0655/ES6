// key,value으로 이루어진 자료구조
// 순서가 중요하지 않음
// but 키는 유일한 키를 가지고 있어야 한다.
// 키만 다르다면 값은 중복이 가능하다

const map = new Map([
  ["key1", "apple"],
  ["key2", "banana"],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);
// 존재여부 가능
console.log(map.has("key2"));
// 순회, 찾기 추가, 삭제, 전부 삭제 가능
map.forEach((value, key) => console.log(value, key));
console.log(map.entries());
