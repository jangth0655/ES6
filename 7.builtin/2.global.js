// global적으로 사용
//console.log(globalThis); // 전역 객체 (브라우저라면 window를 가리킨다.)

// Node의 this는 현재 모듈에 대해 출력
//console.log(this);

console.log(parseFloat("12.34"));
console.log(parseInt("12.34"));

// URL
//(URI, Uniform Resource Identifier 하위 개념)
//URI -> 어떤 자원을 나타내는 단 하나의 고유한 주소,야이디
// 아스키 문자로만 구성되어야한다.
// 한글이나 특수문자는 이스케이프 처리해야한다.

const URL = "http://드림코딩.com";
const encoded = encodeURI(URL);
console.log(encoded); // 이스케이프 처리된다.
const decoded = decodeURI(encoded);
console.log(decoded);

// 전체가 URL이 아니라 부분적인 Component이용
const part = "드림코딩.com";
console.log(encodeURIComponent(part));
