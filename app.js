import express from "express";
import Middlewares from "./middlewares/middlewares";
import ejsRoutes from "./routes/ejsPagesRoutes";
import crudRoutes from "./routes/handelingCrudRoutes";
import route404 from "./routes/404Route";

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