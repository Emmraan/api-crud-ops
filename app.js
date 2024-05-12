const express = require("express");
const Middlewares = require("./middlewares/middlewares");
const ejsRoutes = require("./routes/ejsPagesRoutes");
const crudRoutes = require("./routes/handelingCrudRoutes");
const route404 = require("./routes/404Route")

const app = express();

//****************** ALL MIDDLEWARES ******************

Middlewares(app);

//***************** ROUTES FOR RENDERING EJS PAGES *****************

app.use("/", ejsRoutes)

//***************** ROUTES FOR HANDELNING CRUD OPERATIONS *****************

.use("/", crudRoutes)

//***************** ROUTE FOR INVALID_URL *****************

.use("*", route404);


module.exports = app;