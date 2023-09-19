import mongoose from "mongoose";
import app from "./app.js";
import { config } from "dotenv";

config();

mongoose
  .connect(process.env.URI_DB)
  .then(() => {
    console.log("database connect successful 🚀");
    app.listen(process.env.PORT, () => {
      console.log(`Server listening in port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
