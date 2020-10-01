import express = require("express");
import mongoose = require("mongoose");
import { IResponse } from "./types/types";
import { EventModel } from "./models/event";

const url = "mongodb://localhost:27017/node-api";
const app: express.Application = express();

const db = mongoose.connection;
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

app.post("/create", async (req: express.Request, res: express.Response) => {
  try {
    const payload = req.body;
    const event = new EventModel(payload);
    await event.save();
    const response: IResponse = {
      status: "success",
      data: "data created",
    };
    return res.status(201).send(response);
  } catch (e) {
    const response: IResponse = {
      status: "failed",
      data: "data conflict",
    };
    return res.status(409).send(response);
  }
});

app.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const events = await EventModel.find({});
    const response: IResponse = {
      status: "success",
      data: events,
    };
    return res.status(200).send(response);
  } catch (e) {
    const response: IResponse = {
      status: "failed",
      data: "data not found",
    };
    return res.status(404).send(response);
  }
});

app.get("/event/:n", async (req: express.Request, res: express.Response) => {
  try {
    const { n }: any = req.params;
    const result = await EventModel.find({ name: n });
    const response: IResponse = {
      status: "success",
      data: result,
    };
    return res.status(200).send(response);
  } catch (e) {
    const response: IResponse = {
      status: "failed",
      data: "data not found",
    };
    return res.status(404).send(response);
  }
});

app.put("/edit/:n", async (req: express.Request, res: express.Response) => {
  try{
    const { n }: any = req.params;
    const payload: any = req.body;
    const update = await EventModel.find({ name: n }).update({ $set: payload })
    const response: IResponse = {
      status: "success",
      data: update
    }
    return res.status(200).send(response)
  } catch(e) {
    const response: IResponse = {
      status: "failed",
      data: "data not updated"
    }
    return res.status(400).send(response)
  }
})

app.listen(9000, () => {
  console.log("Server is running on 9000");
});
