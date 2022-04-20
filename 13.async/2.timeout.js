function execute() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 1000);
  console.log("3");
}

execute();

function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error("callback is required");
  }
  if (!seconds || seconds < 0) {
    throw new Error("seconds는 0보다 커야한다.");
  }
  setTimeout(callback, seconds * 1000);
}
