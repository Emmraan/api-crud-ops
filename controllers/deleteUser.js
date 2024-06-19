import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const deleteUser = (req, res) => {
  const userId = req.body.userId;

  // Load existing users from the JSON file
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "../data/userData.json");
  let users = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Find the index of the user with the specified ID
  const userIndex = users.findIndex((user) => user.id === userId);

  // Check if the user with the specified ID exists
  if (userIndex === -1) {
    return res.render("user404");
  }

  // Remove the user from the array
  const deletedUser = users.splice(userIndex, 1)[0];

  // Write the updated user data back to the JSON file
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  // Redirect or respond as needed
  res.redirect("/api/users");
  console.log('Deleted user:', deletedUser);
}

export default deleteUser;