function makeShirt(size: string = "large", message: string = "I love TypeScript!"): void {
    console.log(`I made a ${size} shirt with the message: "${message}"`);
  }
  
  // Call the function with different sizes and messages
  makeShirt(); // Large shirt, default message
  makeShirt("medium"); // Medium shirt, default message
  makeShirt("small", "Python is awesome!"); // Small shirt, custom message
  
  // Optional: Call the function with default values explicitly
  makeShirt("large", "I love coding!"); // Large shirt, explicit default message
  