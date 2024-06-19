import express from 'express';
import RateLimit from 'express-rate-limit';
import { fileURLToPath } from 'url';
import path from "path"

// Define middleware functions
const jsonParser = express.json({ extended: true });
const urlencodedParser = express.urlencoded({ extended: true });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticFiles = express.static(path.join(__dirname, "../public"));

// Set up rate limiter: maximum of 100 requests per 15 minutes
const limiter = RateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// Export middleware setup function
const Middlewares = (app) => {
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

export default Middlewares;