const fruits = ["π", "π", "π", "π"];

for (let i = 0; i < fruits.length; i++) {
  //console.log(fruits[i]);
}

// λ°°μ΄μ λΉκΈλΉκΈ λλ©΄μ μνλκ²μ ν λ
fruits.forEach((value) => console.log(value));

// find => μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μ°Ύμ λ, μ°Ύμ μμ΄νμ€ μ²« μμ΄νμ λ°ν
// findIndex => μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν

const item1 = { name: "milk", price: 1 };
const item2 = { name: "cookie", price: 3 };
const item3 = { name: "pizza", price: 2 };

// λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄μ λ§λμ§ νμΈ
const products = [item1, item2, item3];
const some = products.some((item) => item.name === "pizza");
// pizzaλ λ°°μ΄μ μλ€.
console.log(some);

// λ°°μ΄μ μμ΄νλ€μ΄ λͺ¨λ  μ‘°κ±΄μ λ§λμ§ νμΈ
const every = products.every((item) => item.name === "pizza");
// pizzaλ λ°°μ΄μ μμ§λ§, μ λΆ name === "pizza"λ μλλ€
console.log(every);

// μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νμ μλ‘μ΄ λ°°μ΄λ‘!
const filter = products.filter((item) => item.name === "pizza");
console.log(filter);
console.clear();
// Map λ°°μ΄μ μμ΄νλ€μ λ€λ₯Έ μμ΄νμΌλ‘ λ§΅ννμ¬ λ³ννμ¬ μλ‘μ΄ λ°°μ΄ μμ±
const nums = [1, 2, 3, 4, 5];
const mapFn = nums.map((item) => item * 2);
console.log(mapFn);

// Flatmap : λ°°μ΄μ νμ΄μ€λ€.

const mapFlat = nums.flatMap((item) => [item * 2]);
console.log(mapFlat);

// sort λ°°μ΄μ μμ΄νμ μ λ ¬
// κΈ°λ³Έ => λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³ , κΈ°μ‘΄μ λ°°μ΄ λ³κ²½
const texts = ["hi", "abc"];
texts.sort();
console.log(texts);

const number = [1, 2, 3, 4, 5, 0, 1, 10];
number.sort();
console.log(number);
number.sort((a, b) => a - b);
console.log(number);

// reduce => λ°°μ΄μ μμλ€μ μ μ΄μ μ μ΄μ κ°μ νλλ‘
const reduceNumber = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum = sum + value;
  return sum;
}, 0);

console.log(reduceNumber);
