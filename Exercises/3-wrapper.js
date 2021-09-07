'use strict';

const contract = (fn, ...types) => (...args) => {
  const tType = types[0].name.toLowerCase();
  for (let i = 0; i < args.length; i++) {
    const argsIndex = args[i];
    const argType = typeof argsIndex;
    if (tType !== argType)
      throw new TypeError(`Argument type ${argType} expected ${tType}`);
  }
  const res = fn(...args);
  if (typeof res !== tType)
    throw new TypeError(`Result type ${tType} expected`);
  return res;
};


module.exports = { contract };
