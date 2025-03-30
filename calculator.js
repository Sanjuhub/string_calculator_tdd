const add = (str) => {
  if (!str) return 0;

  // Split the string by comma and map each element to an integer
  let numbers = str.split(",").map((n) => parseInt(n));

  // Add each number in the array
  let sum = numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return sum;
};

module.exports = add;
