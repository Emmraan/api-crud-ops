const express = require("express");
const RateLimit = require('express-rate-limit');
const users = require("./data/userData");
const {html,oneUser,updateUser,deleteUser,createUser,} = require("./controllers/controllers");
const app = express();


app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Enable trust proxy
app.set('trust proxy', true);

// Set up rate limiter: maximum of 100 requests per 15 minutes
const limiter = RateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
});
// apply rate limiter to all requests
app.use(limiter);



app.get("/", (req, res) => {
  const userLink = `<a href="/api/users">click here</a>`;
  res.send(`Go to user page ${userLink}`);
});

// This route show all users in HTML TABLE format
app.get("/users", (req, res) => {
  res.send(html);
});

// This route show all users in JSON Format.
app.get("/api/users", (req, res) => {
  res.json(users);
});

// This route can reate a NEW USER ....
app.post("/api/users", (req, res) => {
  // Call the createUser function to handle user creation and response
  createUser(req, res, users);
});

// This single route can handel RUD(READ,UPDATE,DELETE) operations .get .patch .delete methods
app
  .route("/api/users/:userId")

  // This route show one user in HTML TABLE format
  .get((req, res) => {
    oneUser(req, res);
  })

  .patch((req, res) => {
    updateUser(req, res);
  })

  .delete((req, res) => {
    deleteUser(req, res);
  });

module.exports = app;
