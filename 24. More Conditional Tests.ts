interface Car {
    brand: string;
    model: string;
    year: number;
    color: string;
  }
  
  let car: Car = {
    brand: "Subaru",
    model: "Forester",
    year: 2022,
    color: "blue",
  };
  
  // Tests for equality and inequality with strings
  console.log("Equality test:", car.brand === "Subaru"); // True
  console.log("Equality test:", car.brand !== "Subaru"); // False
  console.log("Inequality test:", car.brand !== "Toyota"); // True
  console.log("Inequality test:", car.brand == "Toyota"); // False
  
  // Tests using the lower case function
  console.log("Lowercase test:", car.brand.toLowerCase() === "subaru"); // True
  console.log("Lowercase test:", car.brand.toLowerCase() !== "subaru"); // False
  
  // Numerical tests
  console.log("Equality test:", car.year === 2022); // True
  console.log("Equality test:", car.year !== 2022); // False
  console.log("Inequality test:", car.year !== 2021); // True
  console.log("Inequality test:", car.year == 2021); // False
  console.log("Greater than test:", car.year > 2020); // True
  console.log("Greater than test:", car.year < 2020); // False
  console.log("Less than test:", car.year < 2023); // True
  console.log("Less than test:", car.year > 2023); // False
  console.log("Greater than or equal to test:", car.year >= 2022); // True
  console.log("Greater than or equal to test:", car.year <= 2020); // False
  console.log("Less than or equal to test:", car.year <= 2022); // True
  console.log("Less than or equal to test:", car.year >= 2024); // False
  
  // Test using "and" and "or" operators
  console.log(
    "And test:",
    car.brand === "Subaru" && car.model === "Forester" && car.year === 2022
  ); // True
  console.log(
    "And test:",
    car.brand !== "Subaru" && car.model !== "Forester" && car.year !== 2022
  ); // False
  console.log(
    "Or test:",
    car.brand === "Subaru" || car.model === "Toyota" || car.year === 2023
  ); // True
  console.log(
    "Or test:",
    car.brand == "subaru" || car.model == "toyota" || car.year == 2024
  ); // False
  
  // Test whether an item is in an array
  let carModels = ["Forester", "Outback", "Legacy"];
  console.log("In test:", carModels.includes(car.model)); // True
  console.log("In test:", !carModels.includes(car.model)); // False
  
  // Test whether an item is not in an array
  console.log("Not in test:", !carModels.includes("Impreza")); // True
  console.log("Not in test:", carModels.includes("Impreza")); // False
  