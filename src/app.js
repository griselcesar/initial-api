import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(cors("*"));
app.use(morgan("dev"));

import clientsRoutes from "./routers/clients.routes.js";

app.use("/", clientsRoutes);

export default app;
