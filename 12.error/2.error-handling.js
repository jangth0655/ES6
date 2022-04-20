//try catch finally

function readFile(path) {
  throw new Error("파일 경로를 찾을 수 없음");
  return "file contents";
}

function processFIle(path) {
  let content;
  try {
    content = readFile(path);
  } catch (error) {
    console.log(error);
    content = "기본내용";
  } finally {
    console.log("성공하든 실패든 마지막으로 리소스할 수 있음");
  }
  const result = "hi" + content;
  return result;
}

const result = processFIle("path");
console.log(result);
