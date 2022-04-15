// 접근제어자 - 캡슐화
// 캡슐화 - 내부데이터를 외부에서 보이지 않도록, 수정할 수 없도록 숨겨놓는다.
// 외부에서 변경이 불가능하게 만들 수 있다
// private(#), public(기본), protected

class Fruit {
  // 인스턴스 만들어질때 초기화가 되어야한다면
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  #name;
  #emoji;
  #type = "과일";

  display = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
//apple.name = "orange";
console.log(apple);
