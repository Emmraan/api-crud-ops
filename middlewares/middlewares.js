const express = require("express");
const RateLimit = require("express-rate-limit");
const path = require("path");

// Define middleware functions
const jsonParser = express.json({ extended: true });
const urlencodedParser = express.urlencoded({ extended: true });
const staticFiles = express.static(path.join(__dirname, "../public"));

// Set up rate limiter: maximum of 100 requests per 15 minutes
const limiter = RateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// Export middleware setup function
module.exports = function Middlewares(app) {
  // Apply middleware to the app
  app.use(jsonParser);
  app.use(urlencodedParser);
  app.use(staticFiles);

  // Set up EJS for rendering
  app.set("view engine", "ejs");

   // Set trust proxy to only trust requests from localhost
  app.set('trust proxy', 'loopback');

  // Use rate limiter
  app.use(limiter);
};