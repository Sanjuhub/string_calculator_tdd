/**
 * Adds numbers from a string, supporting custom delimiters
 * @param {string} str - Input string containing numbers to add
 * @return {number} - Sum of the numbers in the string
 */
const add = (str) => {
  if (!str) return 0;

  let delimiters = [",", "\n"];

  // Handle custom delimiter syntax
  if (str.startsWith("//")) {
    const parts = str.split("\n");
    const delimiterLine = parts.shift();

    const matches = [...delimiterLine.matchAll(/\[(.*?)\]/g)];

    if (matches.length > 0) {
      // Parse multiple custom delimiters enclosed in square brackets
      delimiters = matches.map((m) => m[1]);
    } else {
      // Parse single-character custom delimiter
      delimiters = [delimiterLine[2]];
    }

    str = parts.join("\n");
  }

  // Create regex to split by any of the delimiters
  const splitRegex = new RegExp(delimiters.map(escapeRegex).join("|"), "g");

  // Parse numbers from the string and filter out non-numbers
  const numbers = str
    .split(splitRegex)
    .map((n) => parseInt(n))
    .filter((n) => !isNaN(n));

  // Check for negative numbers
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

/**
 * Escapes special regex characters in a string
 * @param {string} str - String to escape
 * @return {string} - Escaped string safe for regex
 */
const escapeRegex = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

module.exports = add;
