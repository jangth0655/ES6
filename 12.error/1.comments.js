// 한줄 주석
// 주석은 꼭 필요한 경우 작성한다. 그렇지 않으면 작성하지 않는다.
// TODO : XX기능 구현하기

/**
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜(WHY)와 어떻게사용해야하는지,단 정말 필요한 경우에만
 */

//외부에서 많이 쓰이는 함수 API인 경우 JSDoc사용
/**
 *
 * @param {*} a number
 * @param {*} b number
 * @returns number
 */
function aDD(a, b) {
  return a + b;
}
