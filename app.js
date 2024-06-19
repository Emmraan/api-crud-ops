import express from "express";
import Middlewares from "./middlewares/middlewares.js";
import ejsRoutes from "./routes/ejsPagesRoutes.js";
import crudRoutes from "./routes/handelingCrudRoutes.js";
import route404 from "./routes/404Route.js";

const app = express();

//****************** ALL MIDDLEWARES ******************

Middlewares(app);

//***************** ROUTES FOR RENDERING EJS PAGES *****************

app.use("/", ejsRoutes)

//***************** ROUTES FOR HANDELNING CRUD OPERATIONS *****************

.use("/", crudRoutes)

//***************** ROUTE FOR INVALID_URL *****************

.use("*", route404);


export default app;