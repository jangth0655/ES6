// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야한다.

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

const log = (num) => {
  console.log(num);
};

iterate(3, log);

const doubleAndLog = (num) => {
  console.log(num * 2);
};

iterate(3, doubleAndLog);

setTimeout(() => {
  console.log("executing");
}, 2000);
