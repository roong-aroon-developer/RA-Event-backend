import express = require("express");
import mongoose = require("mongoose");
import bodyParser = require("body-parser")
import Events from "./routes/event/index";

const url = "mongodb://mongo:27017/node-api";
const app: express.Application = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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