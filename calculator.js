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

  // Create regex to split by all delimiters
  const splitRegex = new RegExp(
    delimiters.map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"),
    "g"
  );
  console.log("splitRegex :", splitRegex);

  // Split the string by new line and comma and map each element to an integer
  let numbers = str
    .split("\n")
    .map((part) => part.split(splitRegex))
    .flat()
    .map((n) => parseInt(n));

  let negativeNumbers = numbers.filter((n) => n < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`negatives not allowed: ${negativeNumbers.join(",")}`);
  }

  // Add each number in the array
  let sum = numbers.reduce((acc, curr) => {
    if (curr > 1000) return acc;
    return acc + curr;
  }, 0);

  return sum;
};

module.exports = add;
