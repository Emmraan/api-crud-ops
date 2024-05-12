const fs = require("fs");
const path = require("path");

function deleteUser(req, res) {
  const userId = req.body.userId;

  // Load existing users from the JSON file
  const filePath = path.join(__dirname, "../data/userData.json");
  let users = require(filePath);

  // Find the index of the user with the specified ID
  const userIndex = users.findIndex((user) => user.id === userId);

  // Check if the user with the specified ID exists
  if (userIndex === -1) {
    return res.render("user404");
  }

  // Remove the user from the array
  const deletedUser = users.splice(userIndex, 1)[0];

  // Write the updated user data back to the JSON file
  fs.writeFileSync(filePath, JSON.stringify(users));
  
  res.redirect("/api/users")
  console.log(deletedUser);
}

module.exports = deleteUser;