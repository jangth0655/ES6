//0 - 10 이하까지 숫자의 2배를 순회하는 이터레이터 만들기

function makeIterable(initial, max, callback) {
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
