let usernames: string[] = []; // (empty array)

if (usernames.length === 0) {
  console.log("We need to find some users!"); // If the list is empty, print the message We need to find some users!
} else {
  for (let username of usernames) {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
