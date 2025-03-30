const add = (str) => {
  if (!str) return 0;

  let delimiters = [",", "\n"];

  if (str.startsWith("//")) {
    const parts = str.split("\n");
    const delimiterLine = parts.shift();

    const matches = [...delimiterLine.matchAll(/\[(.*?)\]/g)];

    if (matches.length > 0) {
      // multiple custom delimiters
      delimiters = matches.map((m) => m[1]);
    } else {
      // single-character custom delimiter
      delimiters = [delimiterLine[2]];
    }

    str = parts.join("\n");
  }

  const splitRegex = new RegExp(delimiters.map(escapeRegex).join("|"), "g");

  const numbers = str
    .split(splitRegex)
    .map((n) => parseInt(n))
    .filter((n) => !isNaN(n));

  let negativeNumbers = numbers.filter((n) => n < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`negatives not allowed: ${negativeNumbers.join(",")}`);
  }

  let sum = numbers.reduce((acc, curr) => {
    if (curr > 1000) return acc;
    return acc + curr;
  }, 0);

  return sum;
};

const escapeRegex = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

module.exports = add;
