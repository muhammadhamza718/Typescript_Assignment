const furryAnimals: string[] = ["dog", "cat", "rabbit"];

for (const animal of furryAnimals) {
  let description: string;

  switch (animal) {
    case "dog":
      description = "A dog would make a loyal and playful companion.";
      break;
    case "cat":
      description = "A cat is independent and cuddly, perfect for quiet cuddles.";
      break;
    case "rabbit":
      description = "Rabbits are gentle and curious, making them fun pets for families.";
      break;
    default:
      description = "This animal is unknown to me, but I'm sure it has unique qualities!";
  }

  console.log(`${animal.toUpperCase()}: ${description}`);
}

console.log("These animals all share the characteristic of being furry and soft, making them popular choices for pets!");
