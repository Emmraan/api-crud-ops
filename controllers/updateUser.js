const fs = require("fs");
const path = require("path");

function updateUser(req, res) {
  const userId = parseInt(req.params.userId);
  const updatedUserData = req.body;

  // Load existing users from the JSON file
  const filePath = path.join(__dirname, "../data/userData.json");
  const users = require(filePath);

  // Find the index of the user with the specified ID
  const userIndex = users.findIndex((user) => user.id === userId);

  // Check if the user with the specified ID exists
  if (userIndex === -1) {
    return res.status(404).send("User not found");
  }

  // Update the user's data
  users[userIndex] = { ...users[userIndex], ...updatedUserData };

  // Write the updated user data back to the JSON file
  fs.writeFileSync(filePath, JSON.stringify(users));

  // Send the updated user as the response
  res.json(users[userIndex]);
  console.log(updatedUserData);
}

module.exports = updateUser;
