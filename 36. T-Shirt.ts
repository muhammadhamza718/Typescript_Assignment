function make_shirt(size: string, message: string): void {
    console.log(`I made a ${size} shirt with the message: "${message}"`);
  }
  
  // Call the function with different sizes and messages
  make_shirt("large", "I love TypeScript!");
  make_shirt("medium", "Coding is fun!");
  
  // Call the function with default values
  make_shirt("medium", "Python is cool!"); // Uses default message
  