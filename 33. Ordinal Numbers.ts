// Store the numbers 1 through 9 in a array.
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Use an if-else chain inside the loop to print the proper ordinal ending for each number
for (let number of numbers) {
  let suffix = "th";

  if (number === 1) {
    suffix = "st";
  } else if (number === 2) {
    suffix = "nd";
  } else if (number === 3) {
    suffix = "rd";
  }

  console.log(`${number}${suffix}`);
}
