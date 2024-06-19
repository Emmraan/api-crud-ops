import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const updateUser = (req, res) => {
    const userId = req.body.userId;
    const updatedUserData = req.body;

    // Validate the data (assuming validateUserData function exists)
    if (!validateUserData(updatedUserData)) {
        return res.render("updateFieldMiss");
    }

    // Load existing users from the JSON file
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, "../data/userData.json");

    // Read and parse JSON data
    let users = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Find the index of the user with the specified ID
    const userIndex = users.findIndex((user) => user.id === userId);

    // Check if the user with the specified ID exists
    if (userIndex === -1) {
        return res.render("user404");
    }

    // Update the user's data
    users[userIndex] = { ...users[userIndex], ...updatedUserData };

    // Write the updated user data back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    // Redirect to a specific route after updating
    res.redirect("/api/users");

    // Log the updated user data for debugging
    console.log(updatedUserData);
}

function validateUserData(userData) {
    const requiredFields = ["first_name","last_name","email","gender","job_title",];
    return requiredFields.every(
    (field) => userData[field] !== undefined && userData[field].trim() !== "");
}

export default updateUser;