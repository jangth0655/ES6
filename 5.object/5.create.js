/* const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name} : π`);
  },
};

const orange = {
  name: "orange",
  display: function () {
    console.log(`${this.name} : π`);
  },
};

console.log(apple);
console.log(orange);
 */

// νΉμ ν ννλ¦Ώμ λ§κ² κ°μ²΄λ₯Ό μ½κ² λ§λ€μ΄μ£Όλ μμ±μ ν¨μ
// μμ±μ ν¨μ

function Fruit(name, emoji) {
  // thisλ κ°μ²΄ μμ μ κ°λ¦¬ν¨λ€.
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };
  // return this // μλ΅κ°λ₯
}

const apple = new Fruit("apple", "π");

console.log(apple);
