// 주어진 배열에서 중복을 제거 하라
const fruits = ["🍌", "🍎", "🍇", "🍌", "🍎", "🍑"];
//  ['🍌', '🍎', '🍇', '🍑']

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

const newFruits = (fruits) => {
  const uniq = [...new Set(fruits)];
  return uniq;
};

const newFruits2 = (fruits) => {
  const uniq = fruits.filter((item, index) => {
    return fruits.indexOf(item) == index;
  });
  return uniq;
};

console.log(new Set(fruits));
console.log(newFruits(fruits));
console.log(newFruits2(fruits));

const findIntersection = (set1, set2) => {
  const array = [...set1].filter((item) => set2.has(item));
  return new Set(array);
};

console.log(findIntersection(set1, set2));
