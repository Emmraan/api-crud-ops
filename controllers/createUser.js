import fs from 'fs';
import users from '../data/userData.json' assert { type: 'json' };

function createUser(req, res) {
  const { first_name, last_name, email, gender, job_title } = req.body;

  // Validate user data
  if (!validateUserData(req.body)) {
    return res.render("updateFieldMiss");
  }

  function generateUserID() {
    const hexChars = '0123456789abcdefghijklMNOPQRSTUVWXYZABCDEFGHIJKLmnopqrstuvwxyz';
    let id = '';

    for (let i = 0; i < 12; i++) {
        id += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
        if (i === 7) id += '_';
    }
    return id;
}

const id = generateUserID();

  const user = {id,first_name,last_name,email,gender,job_title,};

  users.push(user);

  fs.writeFileSync("./data/userData.json", JSON.stringify(users));

  res.render("showCreatedUserDets",{user});
  console.log(user);
}

function validateUserData(userData) {
  const requiredFields = ["first_name","last_name","email","gender","job_title",];
  
  if (userData["gender"] === "none" || userData["gender"] === undefined) {
  return false;
}

  return requiredFields.every(
    (field) => userData[field] !== undefined &&  userData[field].trim() !== ""
  );
}

module.exports = createUser;