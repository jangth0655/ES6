// ✨ String
const textObj = new String("Hello World!");
console.log(textObj);

const text = "Hello World!";
console.log(text[0]);
console.log(text.charAt(0));
console.log(text.length);

console.log(text.indexOf("l"));
console.log(text.includes("Hello"));
console.log(text.startsWith("H"));
console.log(text.endsWith("!"));

console.log(text.substring(0, 2));
console.log(text.slice(0, 2));
const space = "                 space           ";
console.log(space.trim());

const longText = "Get to the point";
console.log(longText.split(" "));
console.log(longText.split(" ", 2));
