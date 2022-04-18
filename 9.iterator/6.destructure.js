// 구조 / 분해 / 할당 - Destructuring Assignment
const fruits = ["apple", "banana", "orange"];

const [first, second, ...others] = fruits;

console.log(first);

const prop = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

console.clear();

function changeColor(args) {
  const {
    styles: { color },
  } = args;
  console.log(color);
}

changeColor(prop);
