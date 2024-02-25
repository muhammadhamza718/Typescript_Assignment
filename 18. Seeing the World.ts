console.log(`\nI would like to visit\n`);
let vacation_spot: string[] = ['Dubai', 'Tokyo', 'Shibuya', 'Paris'];

console.log("Original order:");
console.log(vacation_spot);

console.log("Alphabetical order (copy):");
const sortedCopy = [...vacation_spot].sort();
console.log(sortedCopy);

console.log("Original order without modifying the actual list:");
console.log(vacation_spot);

console.log("Reverse alphabetical order (copy):");
console.log(sortedCopy.reverse());

console.log("Original order printing it again:");
console.log(vacation_spot);

console.log("Reversed order:");
vacation_spot.reverse();
console.log(vacation_spot);

console.log("Back to original order:");
vacation_spot.reverse();
console.log(vacation_spot);

console.log("Alphabetical order (original):");
vacation_spot.sort();
console.log(vacation_spot);

console.log("Reverse alphabetical order (original):");
vacation_spot.sort().reverse();
console.log(vacation_spot);

