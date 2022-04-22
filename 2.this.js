/**
 * 글로벌 컨텍스트의 this
 * 브라우저 - 윈도우
 * 노드 - 모듈을 가리킨다.
 */

const x = 0;
module.exports.x = x;
console.log(this); // 모듈을 가리킨다.
//console.log(globalThis);
//globalThis.setTimeout

console.clear();

/**
 * 함수 내부에서의 this - module
 * use strict - undefined
 */

function func() {
  console.log(this);
}

func();

/**
 * 생성자 함수 또는 클래스에서는 앞으로 생성될 인스턴스 자체를 가리킨다.
 */
