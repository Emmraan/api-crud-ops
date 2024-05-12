const fs = require("fs");
const path = require("path");

function updateUser(req, res) {
    const userId = req.body.userId;
    const updatedUserData = req.body;

    // Validate the data
    if (!validateUserData(updatedUserData)) {
        return res.render("updateFieldMiss");
    }

    // Load existing users from the JSON file
    const filePath = path.join(__dirname, "../data/userData.json");
    const users = require(filePath);

    // Find the index of the user with the specified ID
    const userIndex = users.findIndex((user) => user.id === userId);

    // Check if the user with the specified ID exists
    if (userIndex === -1) {
        return res.render("user404");
    }

    // Update the user's data
    users[userIndex] = { ...users[userIndex], ...updatedUserData };

    // Write the updated user data back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(users));

    // Send the updated user as the response
    res.redirect("/api/users");
    console.log(updatedUserData);
}

function validateUserData(userData) {
    const requiredFields = ["first_name","last_name","email","gender","job_title",];
    return requiredFields.every(
    (field) => userData[field] !== undefined && userData[field].trim() !== "");
}

module.exports = updateUser;