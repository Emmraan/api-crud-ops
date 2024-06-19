import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import users from '../data/userData.json' assert { type: 'json' };

const createUser = (req, res) => {
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

  const user = { id, first_name, last_name, email, gender, job_title };

  users.push(user);

  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const userDataPath = path.join(__dirname, "../data/userData.json");
    fs.writeFileSync(userDataPath, JSON.stringify(users, null, 2));
    console.log('User added:', user);
    res.render("showCreatedUserDets", { user });
  } catch (error) {
    console.error('Error writing user data:', error);
    res.status(500).send('Error creating user');
  }
}

function validateUserData(userData) {
  const requiredFields = ["first_name", "last_name", "email", "gender", "job_title"];

  if (!userData["gender"] || userData["gender"] === "none") {
    return false;
  }

  return requiredFields.every(
    field => userData[field] !== undefined && userData[field].trim() !== ""
  );
}

export default createUser;