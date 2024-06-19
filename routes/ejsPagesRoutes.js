import express from 'express';
import users from '../data/userData.json' assert { type: 'json' };

const router = express.Router();

router.get("/", (req, res) => res.render("Home"))

.get("/api/users", (req, res) => res.render("allUsers", { users }))

.get("/create/new/user", (req, res) => res.render("createNewUser"))

.get("/read/a/user", (req, res) => res.render("findOneUser"))

.get("/update/a/user", (req, res) => res.render("updateUserForm"))

.get("/delete/a/user", (req, res) => res.render("deleteUser"));

module.exports = router;