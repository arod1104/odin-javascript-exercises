const sumAll = function (...args) {
  if (args.length < 2) {
    return "ERROR";
  }

  for (let i = 0; i < args.length; i++) {
    if (
      typeof args[i] !== "number" ||
      args[i] < 0 ||
      Math.floor(args[i]) !== args[i]
    ) {
      return "ERROR";
    }
  }

  let result = 0;
  for (let i = Math.min(...args); i <= Math.max(...args); i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
