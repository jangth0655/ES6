// Bubbling up, Propagating

// error는 최종적으로 호출한 부분까지 전파된다.
// 최종적으로 에러를 catch할 수 있다.

function a() {
  throw new Error("error!");
}

function b() {
  a();
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log("Catched");
}
