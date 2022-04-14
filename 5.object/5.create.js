/* const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name} : 🍎`);
  },
};

const orange = {
  name: "orange",
  display: function () {
    console.log(`${this.name} : 🍊`);
  },
};

console.log(apple);
console.log(orange);
 */

// 특정한 템플릿에 맞게 객체를 쉽게 만들어주는 생성자 함수
// 생성자 함수

function Fruit(name, emoji) {
  // this는 객체 자신을 가리킨다.
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };
  // return this // 생략가능
}

const apple = new Fruit("apple", "🍎");

console.log(apple);
