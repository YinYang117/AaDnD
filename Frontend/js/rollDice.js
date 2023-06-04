const rollDice = (sides, times) => {
  let results = [];

  for(let i = 0; i < times; i++){
    let num = Math.floor(Math.random() * ((sides + 1) - 1) + 1);
    results.push(num);
  }

  console.log(results);

  return {
    results,
    total: results.reduce((sum, num) => sum + num, 0)
  }   
};

const savingThrow = (min, mod, adv) => {
  const opts = {
    true: () => Math.max(...rollDice(20, 2).results) + mod,
    false: () => Math.min(...rollDice(20, 2).results) + mod,
    undefined: () => rollDice(20, 1).total + mod
  }
  let res = opts[adv]();
  console.log(`roll: ${res}, DC: ${min}`);
  return res >= min;
}

console.log(savingThrow(10, 2, false));
