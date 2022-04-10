{
  // 원시타입은 값이 복사되어 전달된다.
  let a = 1;
  let b = a; // 1

  // 객체타입은 참조값(메모리주소, 레퍼런스)이 복사되어 전달됨
  let apple = {
    name: "apple",
    color: "red",
  };

  // 애플이 가리키고 있는 주소 값을 복사, 저장된다
  let orange = apple;

  orange = { ...apple, name: "orange" }; //새로운 오브젝트에 값만 복사
  console.log("apple", apple);
  console.log("orange", orange);
}
