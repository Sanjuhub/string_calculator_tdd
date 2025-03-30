const add = (str) => {
  try {
    if (!str) return 0;

    let delimiter = ",";

    if (str.startsWith("//")) {
      const parts = str.split("\n");
      console.log("parts :", parts);
      delimiter = parts[0].split("//")[1];
      str = parts[1];
    }

    // Split the string by new line and comma and map each element to an integer
    let numbers = str
      .split("\n")
      .map((part) => part.split(delimiter))
      .flat()
      .map((n) => parseInt(n));

    // Add each number in the array
    let sum = numbers.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    return sum;
  } catch (error) {
    console.log("error :", error);
    return 0;
  }
};

module.exports = add;
