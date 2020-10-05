import express = require("express");
import mongoose = require("mongoose");

import Events from "./routes/event/index";

const url = "mongodb://localhost:27017/node-api";
const app: express.Application = express();

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to Mongo!");
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(-1);
  });

app.use(express.json());
app.use("/events", Events);

export default app