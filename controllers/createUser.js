const fs = require("fs");
// const da = require("../data/userData.json")
function createUser(req, res, users) {
  const { first_name, last_name, email, gender, job_title } = req.body;

  // Validate user data
  if (!validateUserData(req.body)) {
    return res.status(400).send("Invalid user data: Missing fields");
  }

  const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  const newUser = {
    id,
    first_name,
    last_name,
    email,
    gender,
    job_title,
  };

  users.push(newUser);

  // Write the updated user data back to the JSON file
  fs.writeFileSync("./data/userData.json", JSON.stringify(users));

  // Send the newly created user as the response
  res.status(201).json(newUser);
  console.log(newUser);
}

function validateUserData(userData) {
  const requiredFields = [
    "first_name",
    "last_name",
    "email",
    "gender",
    "job_title",
  ];
  return requiredFields.every(
    (field) => userData[field] !== undefined && userData[field].trim() !== ""
  );
}

module.exports = createUser;
