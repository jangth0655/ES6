// Static 정적 프로퍼티, 메서드
// 인스턴스마다 변경되는 데이터가 아니라 클래스 레벨에서 공통적으로 사용할 수 있는 속성
class Fruit {
  // constructor 필요한 데이터를 채워준다. -> 생성자
  // new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 클래스 레벨  만들어진 인스턴스와 관련이 없음
  static makeRandomFruit() {
    // static에서는 템플릿 상태 즉, 데이터가 채어지지 않은 상태이기 때문에,
    // this를 사용하지 않는다.
    return new Fruit("banana", "🍌");
  }

  // 인스턴스레벨, 만들어진 데이터에 대해서 접근하여 동작하기 떄문에
  display = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };
}

// apple은 Fruit 클래스의 인스턴스(객체)이다.
const apple = new Fruit("apple", "🍎");
const banana = Fruit.makeRandomFruit();

console.log(banana);
console.log(apple);
