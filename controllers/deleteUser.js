const fs = require("fs");
const path = require("path");

function deleteUser(req, res) {
  const userId = parseInt(req.params.userId);

  // Load existing users from the JSON file
  const filePath = path.join(__dirname, "../data/userData.json");
  let users = require(filePath);

  // Find the index of the user with the specified ID
  const userIndex = users.findIndex((user) => user.id === userId);

  // Check if the user with the specified ID exists
  if (userIndex === -1) {
    return res.status(404).send("User not found");
  }

  // Remove the user from the array
  const deletedUser = users.splice(userIndex, 1)[0];

  // Write the updated user data back to the JSON file
  fs.writeFileSync(filePath, JSON.stringify(users));

  // Send the deleted user as the response
  res.json(deletedUser);
  console.log(deletedUser);
}

module.exports = deleteUser;