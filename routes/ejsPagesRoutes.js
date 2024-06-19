import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

router.get("/", (req, res) => res.render("Home"))

.get("/api/users", (req, res) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, '../data/userData.json');
    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.render("allUsers", { users });
})

.get("/create/new/user", (req, res) => res.render("createNewUser"))

.get("/read/a/user", (req, res) => res.render("findOneUser"))

.get("/update/a/user", (req, res) => res.render("updateUserForm"))

.get("/delete/a/user", (req, res) => res.render("deleteUser"));

export default router;