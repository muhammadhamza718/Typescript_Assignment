function buildSandwich(...items: string[]): void {
    if (items.length === 0) {
      console.log("Your sandwich is empty!");
      return;
    }
    
    console.log("Your sandwich has:");
    for (const item of items) {
      console.log(`- ${item}`);
    }
  }
  
  buildSandwich("bread", "cheese", "tomato");
  buildSandwich("bread", "lettuce", "mustard");
  buildSandwich();
  