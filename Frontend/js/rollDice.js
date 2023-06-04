const rollDice = (sides, times) => {
  let results = [];

  for(let i = 0; i < times; i++){
    let num = Math.floor(Math.random() * sides + 1);
    results.push(num);
  }

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
  return {
    msg: `roll: ${res}, DC: ${min}`,
    result: res >= min
  }
}

const rollAttributes = () => {
  let results = [];

  for(let i = 0; i < 6; i ++){
    let resArr = rollDice(6, 4).results;
    let idx = resArr.indexOf(Math.min(...resArr));

    resArr.splice(idx, 1);
    let res = resArr.reduce((sum, num) => sum + num, 0);
    
    results.push(res);
  }
  return results;
}

