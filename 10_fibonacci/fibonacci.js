const fibonacci = function (index) {
  if (typeof index !== "number") {
    index = parseInt(index);
  }
  if (index < 0) return "OOPS";
  if (index === 0) return 0;
  if (index === 1) return 1;
  let fib = [0, 1];
  for (let i = 2; i <= index; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib[index];
};

// Do not edit below this line
module.exports = fibonacci;
