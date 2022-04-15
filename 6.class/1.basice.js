// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (더이상 쓰이지 않는다.)
// 2. 클래스 ✨

// 클래스
class Fruit {
  // constructor 필요한 데이터를 채워준다. -> 생성자
  // new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };
}

// apple은 Fruit 클래스의 인스턴스(객체)이다.
const apple = new Fruit("apple", "🍎");

console.log(apple);
