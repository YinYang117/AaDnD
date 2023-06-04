const rollDice = (sides, opts={}) => {
  let results = [];

  if(!opts.times) opts.times = 1;
  if(!opts.verbose) opts.verbose = false;
  
  const {times, verbose} = opts;

  for(let i = 0; i < times; i++){
    let num = Math.floor(Math.random() * sides + 1);
    results.push(num);
  }

  let total = results.reduce((sum, num) => sum + num, 0)

  return verbose ? {
    results,
    total
  } : total; 
};

const savingThrow = (min, mod, opts={}) => {
  if(!opts.verbose) opts.verbose = false;

  const fn = {
    true: () => Math.max(...rollDice(20,  {times: 2, verbose: true}).results) + mod,
    false: () => Math.min(...rollDice(20, {times: 2, verbose: true}).results) + mod,
    undefined: () => rollDice(20) + mod
  }

  let res = fn[opts.adv]();

  return opts.verbose ? {
    msg: `roll: ${res}, DC: ${min}`,
    result: res >= min
  } : res;
}

const rollAttributes = () => {
  let results = [];

  for(let i = 0; i < 6; i ++){
    let resArr = rollDice(6, {times: 4, verbose: true}).results;
    let idx = resArr.indexOf(Math.min(...resArr));

    resArr.splice(idx, 1);
    let res = resArr.reduce((sum, num) => sum + num, 0);
    
    results.push(res);
  }
  return results;
};
