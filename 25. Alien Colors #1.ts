enum alien_Color {GREEN = "green", YELLOW = "yellow", RED = "red",}
  
  let alienColor: alien_Color = alien_Color.GREEN;
  
  if (alienColor === alien_Color.GREEN) {
    console.log("The player just earned 5 points for shooting the green alien!");
  }
  else {
    console.log(`oops! The Alien is still flying`);
  }