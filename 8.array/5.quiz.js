// 함수 단위로

// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

console.log("------------1");
//1
const array1 = ["🍌", "🍓", "🍇", "🍓"];
const changeArray1 = (array1, fruit) => {
  if (!array1.includes(fruit)) {
    return `Not found ${fruit}`;
  } else {
    const newArray = array1.map((item) => {
      return item === fruit ? item.replace(fruit, "🥝'") : item;
    });
    return newArray;
  }
};

console.log(changeArray1(array1, "a"));

console.log("------------2");
//2
const array2 = ["🍌", "🥝", "🍇", "🥝"];
const countArray2 = (array2, fruit) =>
  array2.filter((item) => item === fruit).length;
console.log(countArray2(array2, "🥝"));

console.log("------------3");
//3

const array3 = ["🍌", "🥝", "🍇"];
const array4 = ["🍌", "🍓", "🍇", "🍓"];

const commonArray = (firstArray, secondArray) => {
  const newArray = secondArray.map((secondItem) => {
    return firstArray.filter((firstItem) => firstItem === secondItem);
  });
  return newArray.flat();
};

console.log(commonArray(array3, array4));
