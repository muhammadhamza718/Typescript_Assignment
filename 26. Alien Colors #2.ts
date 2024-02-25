enum alien_Color {GREEN = "green", YELLOW = "yellow", RED = "red",}
  
  let alienColor: alien_Color = alien_Color.YELLOW; // or 'YELLOW , RED'
  
  if (alienColor === alien_Color.YELLOW){
    console.log("The player just earned 5 points for shooting the green alien!");
  }
  else{ 
    console.log("The player earned 10 points for shooting the alien.");
  }
  else if (alienColor === alien_Color.GREEN){
    console.log("The player just earned 5 points for shooting the green alien!");
  }
  else{ 
    console.log("The player earned 10 points for shooting the alien.");
  }