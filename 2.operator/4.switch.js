//Switch Conditional statement
// 정해진 범위안에서 값에 대해 특정한 조건을 실행해야할 경우

let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "mon";
    break;
  case 2:
    dayName = "tue";
    break;
  case 3:
    dayName = "wed";
    break;
  case 4:
    dayName = "thurs";
    break;
  case 5:
    dayName = "fri";
    break;
  default:
    console.log("Sat!!!");
}
