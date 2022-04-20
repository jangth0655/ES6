function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      return reject(new Error("seconds < 0"));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => egg`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => fry`);
}

function getChicken() {
  return Promise.resolve(`chicken => chicken`);
}

getChicken()
  .then((chicken) => {
    return fetchEgg(chicken);
  })
  .then(fryEgg)
  .then(console.log);

// promise all -> 병렬적으로 수행
