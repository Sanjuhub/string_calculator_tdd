const add = (str) => {
  if (!str) return 0;

  //str = "4\n2,3\n4,55"

  // Split the string by new line and comma and map each element to an integer
  let numbers = str
    .split("\n")
    .map((part) => part.split(","))
    .flat()
    .map((n) => parseInt(n));

  // Add each number in the array
  let sum = numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return sum;
};

module.exports = add;
