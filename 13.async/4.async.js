// async 비동기 함수라고 알려주고, await 동기적으로 수행한다.

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => egg`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => fry`);
}

function getChicken() {
  return Promise.resolve(`chicken => chicken`);
}

async function getChickenAsync() {
  const chicken = await getChicken();
  const egg = await fetchEgg(chicken);
  const fryegg = await fetchEgg(egg);
  console.log(fryegg);
  return fryegg;
}

getChickenAsync();
