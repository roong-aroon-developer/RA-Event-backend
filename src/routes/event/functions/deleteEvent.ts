import express = require("express");
import { IResponse } from "./types/types";
import { EventModel } from "../models/eventModel";

const router = express.Router();

export const deleteEvent = router.delete("/:id", async (req: express.Request, res: express.Response) => {
  try {
    const { n }: any = req.params;
    await EventModel.findOneAndRemove({ _id: n })
    const response: IResponse = {
      status: "success",
      data:  "Data removed" ,
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
