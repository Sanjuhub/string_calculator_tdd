const add = (str) => {
  if (!str) return 0;

  let delimiter = ",";

  if (str.startsWith("//")) {
    const parts = str.split("\n");
    console.log('parts :', parts);

    delimiter = parts[0].split("//")[1];

    if (delimiter.startsWith("[")) {
      delimiter = delimiter.slice(1, -1);
    }
    
    str = parts[1];
  }

  // Split the string by new line and comma and map each element to an integer
  let numbers = str
    .split("\n")
    .map((part) => part.split(delimiter))
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
