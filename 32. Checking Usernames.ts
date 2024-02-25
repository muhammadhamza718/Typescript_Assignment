let current_users: string[] = ["Alice", "Bob", "Charlie", "David", "Emily", "JOHN"];
let new_users: string[] = ["John", "Mary", "Charlie", "Jane", "Peter"];

for (let new_user of new_users) {
  let lowerCaseNewUser = new_user.toLowerCase();

  let isUnique = true;

  for (let current_user of current_users) {
    let lowerCaseCurrent_user = current_user.toLowerCase(); 

    if (lowerCaseNewUser === lowerCaseCurrent_user) {
      isUnique = false;
      break;
    }
  }

  if (isUnique) {
    console.log(`Username "${new_user}" is available!`);
  } else {
    console.log(`Username "${new_user}" is already taken. Please choose another one.`);
  }
}
