// 5이상의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

const result2 = nums
  .filter((n) => n > 5)
  .reduce((avg, num, _, array) => {
    return avg + num / array.length;
  });
