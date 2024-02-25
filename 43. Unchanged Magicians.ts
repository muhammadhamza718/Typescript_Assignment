const magicians: string[] = ["David Copperfield", "Criss Angel", "Dynamo", "Penn & Teller"];

function make_great(originalMagicians: string[]): string[] {

  const greatMagicians: string[] = originalMagicians.slice();

  for (let i = 0; i < greatMagicians.length; i++) {
    greatMagicians[i] = greatMagicians[i] + " the Great";
  }
  return greatMagicians;
}

function showMagicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

const greatMagicians = make_great(magicians.slice());

console.log("\nOriginal magicians:");
showMagicians(magicians);

console.log("\nGreat magicians:");
showMagicians(greatMagicians);
