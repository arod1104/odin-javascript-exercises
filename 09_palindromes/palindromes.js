const palindromes = function (string) {
  const arr = string.split("");
  const regex = /[a-zA-Z0-9]/;
  const filteredChars = arr.filter((char) => regex.test(char));
  const cleanArr = arr
    .filter((char) => regex.test(char))
    .map((char) => char.toLowerCase());
  return cleanArr.join("") === cleanArr.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
