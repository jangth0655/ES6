//0 - 10 이하까지 숫자의 2배를 순회하는 이터레이터 만들기

/* function makeIterable(initial, max, callback) {
  return {
    [Symbol.iterator]: () => {
      const max = max;
      let num = initial;
      return {
        next() {
          return { value: callback(num++), done: num > max };
        },
      };
    },
  };
}
 */

function* multipleGenerator() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    yield i ** 2;
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

next = multiple.next();
console.log(next.value, next.done);

next = multiple.next();
console.log(next.value, next.done);
multiple.return;
