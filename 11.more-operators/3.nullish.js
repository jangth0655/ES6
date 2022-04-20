// Nullish Coalescing Operator

// ?? null, undefined만
// || false인 모든것에 대해서 ("",0,-0, null, undefined)

let num = 0;
console.log(num ?? "-1");
console.log(num && "-1");
console.log(num || "-1");
